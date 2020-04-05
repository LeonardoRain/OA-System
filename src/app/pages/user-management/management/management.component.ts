import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';

interface UserData {
  id: number;     // 员工编号
  nickname: string;           // 姓名
  department: string;         // 所在部门
  privilege: string[];        // 员工权限
  username: string;           // 用户名
  password: string;           // 密码
  email: string;              // 邮箱
  phoneNumberPrefix: string;  // 电话前缀
  phoneNumber: number;        // 电话
  agree?: boolean;            // 同意
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})

// 组件主体
export class ManagementComponent implements OnInit {
  public users: User[];
  public dataBefore: any[];
  public dataAfter: any[];

  listOfData: (User & { description: string; checked: boolean; expand: boolean; disabled: boolean; })[];
  displayData: any[];
  bordered = true;
  loading = false;
  sizeChanger = false;
  pagination = true;
  header = true;
  title = true;
  footer = true;
  fixHeader = false;
  size = 'small';
  expandable = false;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  simple = false;
  noResult = false;
  position = 'bottom';

  constructor(private userService: UserService) { }

  currentPageDataChange($event: UserData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    const users$ = this.userService.index();
    users$.subscribe((data: User[]) => {
      this.dataBefore = data;
      this.dataAfter = [];
      this.dataBefore.map(user => {
        this.dataAfter.push(Object.assign({}, user, {
          description: '广州市玄武无线科技股份有限公司',
          checked: false,
          expand: false,
          disabled: false
        }));
      });
      this.listOfData = this.dataAfter;
    });
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }
}
