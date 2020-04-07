import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',

  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changedUser: User;
  users: User[];

  changePasswordForm = new FormGroup({
    userName: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirm: new FormControl(),
    phoneNumber: new FormControl(),
    captcha: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
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
    this.changePasswordForm = this.fb.group({
      userName: [null, [Validators.required, this.contentValidators(/^[a-zA-Z0-9_]{6,16}$/)]],
      oldPassword: [null, [Validators.required, this.contentValidators(/^[\S]{6,16}$/)]],
      newPassword: [null, [Validators.required, this.contentValidators(/^[\S]{6,16}$/)]],
      confirm: [null, [this.confirmValidator]],
      phoneNumber: ['', [Validators.required, this.contentValidators(/^(?:(?:\+|00)86)?1\d{10}$/)]],
      captcha: [null, [Validators.required]]  // 有待完善
    });
  }

  createSuccessMessage(): void {
    this.message.create('success', `密码修改成功,请重新登陆！`);
  }

  createErrorMessage(): void {
    this.message.create('error', `用户名与原密码或手机号不匹配!`);
  }

  checkOldPassword(users: User[]) {
    const inputUsername = this.changePasswordForm.value.userName;
    const inputOldPassword = this.changePasswordForm.value.oldPassword;
    // const inputPhoneNumber = this.changePasswordForm.value.phoneNumber;
    let flag = false;
    users.forEach(user => {
      if (inputUsername === user.username) {
        if (inputOldPassword === user.password) {
          flag = true;
          const inputNewPassword = { password: this.changePasswordForm.value.newPassword };
          this.changedUser = user;
          this.userService.changePassword(this.changedUser.id, inputNewPassword).subscribe(data => {
            // alert(`用户: ${this.changedUser.username}  密码修改成功,即将重新登陆！`);
            this.createSuccessMessage();
            localStorage.removeItem('currentUser');
            this.router.navigate(['./login']);
          });
          return;
        } else {
          flag = false;
        }
      }
    });
    if (flag) {
      this.changePasswordForm.reset();
    } else {
      // alert('用户名与原密码或手机号不匹配!');
      this.createErrorMessage();
    }
  }

  submitForm(value: any): void {
    // tslint:disable-next-line: forin
    for (const key in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[key].markAsDirty();
      this.changePasswordForm.controls[key].updateValueAndValidity();
    }
    const users$ = this.userService.index();
    users$.subscribe((data: User[]) => {
      this.users = data;
      this.checkOldPassword(this.users);
    });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.changePasswordForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[key].markAsPristine();
      this.changePasswordForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.changePasswordForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    })

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.changePasswordForm.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
}
