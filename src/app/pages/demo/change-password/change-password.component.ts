import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',

  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  public user: User;

  changePasswordForm = new FormGroup({
    username: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirm: new FormControl(),
    phoneNumber: new FormControl(),
    captcha: new FormControl()
  });

  submitForm(value: any): void {
    // tslint:disable-next-line: forin
    for (const key in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[key].markAsDirty();
      this.changePasswordForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
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

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [this.confirmValidator]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      captcha: ['', [Validators.required]]  // 有待完善
    });
  }
}
