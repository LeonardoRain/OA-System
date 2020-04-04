import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerComponent } from './divider/divider.component';
import { PageHeaderContentComponent } from './page-header-content/page-header-content.component';


@NgModule({
  imports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent, DividerComponent, PageHeaderContentComponent],
  exports: [DividerComponent, PageHeaderContentComponent]
})
export class WelcomeModule { }
