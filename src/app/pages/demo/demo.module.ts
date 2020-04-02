import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [DemoComponent, LoginComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
