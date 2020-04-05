import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',

  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changedUser: User;
  users: User[];


  changePasswordForm = new FormGroup({
    username: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirm: new FormControl(),
    phoneNumber: new FormControl(),
    captcha: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.changePasswordForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [this.confirmValidator]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      captcha: ['', [Validators.required]]  // 有待完善
    });
  }

  checkOldPassword(users: User[]) {
    const inputUsername = this.changePasswordForm.value.userName;
    console.log(inputUsername);
    const inputOldPassword = this.changePasswordForm.value.oldPassword;
    console.log(inputOldPassword);
    const inputPhoneNumber = this.changePasswordForm.value.phoneNumber;
    let flag = false;
    users.forEach(user => {
      if (inputUsername === user.username) {
        if (inputOldPassword === user.password) {
          flag = true;
          const newPassword = JSON.stringify({ password: this.changePasswordForm.value.newPassword });
          this.changedUser = user;
          console.log(this.changePasswordForm.value.newPassword);
          console.log(this.changedUser.id);
          console.log(newPassword);
          this.userService.changePassword(this.changedUser.id, newPassword).subscribe(data => {
            console.log(`用户:${this.changedUser.username}/${this.changedUser.id} 密码修改成功！`);
            console.log(data);
          });
          return;
        } else {
          flag = false;
        }
      }
    });
    if (flag) {
      // console.log(`用户:${this.changedUser.username}/${this.changedUser.id} 密码修改成功！`);
      this.changePasswordForm.reset();
    } else {
      alert('用户名与原密码或手机号不匹配!');
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
