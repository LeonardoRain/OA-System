import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DividerComponent } from './divider/divider.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
  declarations: [WelcomeComponent, PageHeaderComponent, DividerComponent],
  exports: [WelcomeComponent, PageHeaderComponent]
})
export class WelcomeModule { }
