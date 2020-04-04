// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import zh from '@angular/common/locales/zh';
import { PageNotFoundComponent } from '../pages/demo/page-not-found/page-not-found.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { DemoComponent } from '../pages/demo/demo.component';


registerLocaleData(zh);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzIconModule,
    HomeRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
