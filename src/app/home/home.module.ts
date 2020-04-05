// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import zh from '@angular/common/locales/zh';
import { QiutButtonComponent } from './tools/qiut-button/qiut-button.component';
import { BadgeProcessingComponent } from './tools/badge-processing/badge-processing.component';
import { AvatarComponent } from './tools/avatar/avatar.component';


registerLocaleData(zh);

@NgModule({
  declarations: [HomeComponent, QiutButtonComponent, BadgeProcessingComponent, AvatarComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NzIconModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
