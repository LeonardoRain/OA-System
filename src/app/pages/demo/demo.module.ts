import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import { WelcomeModule } from '../welcome/welcome.module';
import { ResultFofComponent } from './result-fof/result-fof.component';

@NgModule({
  declarations: [DemoComponent, LoginComponent, ChangePasswordComponent, ResultFofComponent, ResultFofComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    WelcomeModule
  ]
})
export class DemoModule { }
