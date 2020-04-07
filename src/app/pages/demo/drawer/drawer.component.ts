import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {
  visible = false;

  // 注册申请表单 （Registration Request)
  rrForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    nickname: new FormControl(),
    desc: new FormControl(),
  });

  constructor(
    private message: NzMessageService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.rrForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      desc: [null],
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // 请求注册提交提示
  createRRSMessage(): void {
    this.message.create('success', `已向管理员发送的您的注册申请！`);
  }

  // 点击请求注册账号抽屉的提交按钮
  onClickRRS() {
    this.createRRSMessage();
    this.close();
  }
}
