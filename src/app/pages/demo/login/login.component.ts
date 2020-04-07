import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public users: User[];
  loginUser: User;

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    public authService: AuthService,
    private message: NzMessageService
  ) { }

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
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, this.contentValidators(/^[A-Za-z0-9_]{6,16}$/)]],
      password: [null, [Validators.required, this.contentValidators(/^[\S]{6,16}$/)]],
      remember: [true]
    });
  }

  startShowMessages(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.message
      .loading('正在登陆', { nzDuration: 500 })
      .onClose!.pipe(
        // tslint:disable-next-line: no-non-null-assertion
        concatMap(() => this.message.success('登陆成功', { nzDuration: 2500 }).onClose!),
        // tslint:disable-next-line: no-non-null-assertion
        concatMap(() => this.message.info(`欢迎 ${this.loginUser.nickname}！`, { nzDuration: 2500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
      });
  }

  createErrorMessage(): void {
    this.message.create('error', `用户名或密码不正确！`);
  }

  checkLogin(users: User[]) {
    const inputUsername = this.loginForm.value.username;
    const inputPassword = this.loginForm.value.password;
    let flag = false;
    users.forEach(user => {
      if (inputUsername === user.username) {
        if (inputPassword === user.password) {
          flag = true;
          this.loginUser = user;
          localStorage.setItem('currentUser', JSON.stringify(this.loginUser));
          return;
        } else {
          flag = false;
        }
      }
    });
    if (flag) {
      this.startShowMessages();
      console.log(`用户: <${this.loginUser.username}><${this.loginUser.id}> 登陆成功！`);
      this.authService.login(this.loginUser);
      this.router.navigate(['/home/welcome']);
    } else {
      this.createErrorMessage();
    }
  }

  onSubmit() {
    // tslint:disable-next-line: forin
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    const users$ = this.userService.index();
    users$.subscribe((data: User[]) => {
      this.users = data;
      this.checkLogin(this.users);
    });
  }
}
