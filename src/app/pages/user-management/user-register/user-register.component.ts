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
  public gender: string;
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

  // 接收性别选择的值
  getGender(e) {
    this.gender = e;
  }

  // 接收部门选择的值
  getDepartment(e) {
    this.department = e;
  }

  // 接收部门选择的值
  getPrivilege(e) {
    this.privilege = e;
  }

  resetForm(): void {
    this.userRegisterForm.reset();
    this.userRegisterForm.value.gender = null;
    this.userRegisterForm.value.department = null;
    this.userRegisterForm.value.privilege = null;
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

  // 自定义表单验证
  private contentValidators(reg: RegExp) {
    const contentValidator = (control: FormControl): { [s: string]: boolean } => {
      if (control.value && !control.value.match(reg)) {
        return { matchErr: true, error: true };
      } else {
        return {};
      }
    };
    return contentValidator;
  }

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      id: [null, [Validators.required, this.contentValidators(/^[0-9]{8,8}$/)]],
      nickname: [null, [Validators.required, this.contentValidators(/^[\S]{1,20}$/)]],
      gender: [this.gender, []],
      department: [null, []],
      privilege: [null, []],
      username: [null, [Validators.required, this.contentValidators(/^[A-Za-z0-9_]{6,16}$/)]],
      password: [null, [Validators.required, this.contentValidators(/^[\S]{6,16}$/)]],
      // tslint:disable-next-line: max-line-length
      email: [null, [Validators.required, this.contentValidators(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required, this.contentValidators(/^(?:(?:\+|00)86)?1\d{10}$/
      )]],
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
    this.newUser.gender = this.gender;
    this.newUser.department = this.department;
    this.newUser.privilege = this.privilege;
    if (this.checkNewUserId(this.newUser) && this.checkNewUserUsername(this.newUser)) {
      this.userService.addNewUser(this.newUser).subscribe();
      this.resetForm();
      this.createSuccessMessage();
    }
  }
}
