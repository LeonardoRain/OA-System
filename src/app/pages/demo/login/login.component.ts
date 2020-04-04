import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: User[];

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remember: [true]
    });
  }

  checkLogin(users: User[]) {
    const inputUsername = this.loginForm.value.username;
    const inputPassword = this.loginForm.value.password;
    let flag = false;
    users.forEach(user => {
      if (inputUsername === user.username) {
        if (inputPassword === user.password) {
          flag = true;
          return;
        } else {
          flag = false;
        }
      }
    });
    if (flag) {
      console.log('登陆成功！');
      this.router.navigate(['./welcome']);
    } else {
      alert('用户名或密码错误！');
    }
  }

  onSubmit() {
    const users$ = this.userService.index();
    users$.subscribe((data: User[]) => {
      this.users = data;
      this.checkLogin(this.users);
    });
  }
}
