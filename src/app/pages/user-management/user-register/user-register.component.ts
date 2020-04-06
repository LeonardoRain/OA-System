import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',

  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public newUser: User;
  public users: User[];
  public department: string;
  public privilege: string[];
  public users$;

  userRegisterForm = new FormGroup({
    id: new FormControl(),
    nickname: new FormControl(),
    gender: new FormControl(),
    department: new FormControl(),
    privilege: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    phoneNumberPrefix: new FormControl(),
    phoneNumber: new FormControl(),
    agree: new FormControl(),
  });

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.userRegisterForm.controls) {
      this.userRegisterForm.controls[i].markAsDirty();
      this.userRegisterForm.controls[i].updateValueAndValidity();
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.userRegisterForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.userRegisterForm.controls) {
      this.userRegisterForm.controls[key].markAsPristine();
      this.userRegisterForm.controls[key].updateValueAndValidity();
    }
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService
  ) {
    this.users$ = this.userService.index();
    this.users$.subscribe((data: User[]) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      id: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      gender: ['男', []],
      department: ['IOC', []],
      privilege: [['用户管理', '表单管理'], []],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required, Validators.minLength(11)]],
      agree: [false, [Validators.required]]
    });
  }

  // 添加成功提示
  createSuccessMessage(): void {
    this.message.create('success', `添加员工成功，已经为该员工发送邮件！`);
  }

  // 员工id重复提示
  createRepeatIdMessage(): void {
    this.message.create('error', `员工编号已存在！`);
  }

  // 员工username重复提示
  createRepeatUsernameMessage(): void {
    this.message.create('error', `员工用户名已存在！`);
  }

  // 接受子组件department的值
  // getDepartment(departmentValue) {
  //   // console.log(departmentValue);
  //   this.department = departmentValue;
  //   // console.log(this.department);
  //   // this.newUser.department = departmentValue;
  //   // console.log(this.newUser.department);
  // }

  // 检查新注册的员工编号是否与现存的账号有重复
  checkNewUserId(newUser: User): boolean {
    let flag = true;
    this.users.forEach(user => {
      if (newUser.id === user.id) {
        this.createRepeatIdMessage();
        flag = false;
      }
    });
    return flag;
  }

  // 检查新注册的员工用户名是否与现存的账号有重复
  checkNewUserUsername(newUser: User): boolean {
    let flag = true;
    this.users.forEach(user => {
      if (newUser.username === user.username) {
        this.createRepeatUsernameMessage();
        flag = false;
      }
    });
    return flag;
  }

  onSubmit() {
    this.newUser = this.userRegisterForm.value;
    if (this.checkNewUserId(this.newUser) && this.checkNewUserUsername(this.newUser)) {
      this.userService.addNewUser(this.newUser).subscribe();
      this.userRegisterForm.reset();
      this.createSuccessMessage();
    }
  }
}
