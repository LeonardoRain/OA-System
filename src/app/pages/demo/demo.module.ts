import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import { WelcomeModule } from '../welcome/welcome.module';
import { ResultFofComponent } from './result-fof/result-fof.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ForgetPasswordDrawerComponent } from './forget-password-drawer/forget-password-drawer.component';
import { AccountNoticeComponent } from './account-notice/account-notice.component';

@NgModule({
  declarations: [DemoComponent, LoginComponent, ChangePasswordComponent, ResultFofComponent, ResultFofComponent, DrawerComponent, ForgetPasswordDrawerComponent, AccountNoticeComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    WelcomeModule
  ]
})
export class DemoModule { }
