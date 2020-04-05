import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',

  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public newUser: User;
  public department: string;
  public privilege: string[];

  userRegisterForm = new FormGroup({
    id: new FormControl(),
    nickname: new FormControl(),
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      id: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      department: [null, []],
      privilege: [null, []],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required, Validators.minLength(11)]],
      agree: [false, [Validators.required]]
    });
  }

  // 接受子组件department的值
  getDepartment(departmentValue) {
    // console.log(departmentValue);
    this.department = departmentValue;
    // console.log(this.department);
    // this.newUser.department = departmentValue;
    // console.log(this.newUser.department);
  }



  onSubmit() {
    this.newUser = this.userRegisterForm.value;
    // this.newUser.department = this.department;
    // this.newUser.privilege = this.privilege;
    console.log(this.newUser);
    this.userService.addNewUser(this.newUser).subscribe();
    this.userRegisterForm.reset();
    alert('添加员工成功！');
  }
}
