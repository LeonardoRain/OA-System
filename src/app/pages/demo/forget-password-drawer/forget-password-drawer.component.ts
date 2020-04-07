import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password-drawer',
  templateUrl: './forget-password-drawer.component.html',
  styleUrls: ['./forget-password-drawer.component.less']
})
export class ForgetPasswordDrawerComponent implements OnInit {
  visible = false;

  fpForm = new FormGroup({
    username: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirm: new FormControl(),
    phoneNumber: new FormControl(),
    captcha: new FormControl(),
  });

  constructor(
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fpForm = this.fb.group({
      username: [null, [Validators.required]],
      oldPassword: [null, [Validators.required, Validators.minLength(8)]],
      newPassword: [null, [Validators.required, Validators.minLength(8)]],
      confirm: [null, [Validators.required, Validators.minLength(8)]],
      phoneNumber: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // 修改密码提交提示
  createFPSMessage(): void {
    this.message.create('waring', `该功能暂时不支持，请登陆后修改密码！`);
  }

  // 点击忘记密码抽屉的提交按钮
  onclickFPS() {
    this.createFPSMessage();
    this.close();
  }
}
