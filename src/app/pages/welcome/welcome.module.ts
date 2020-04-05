import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgZorroAntdModule, NzIconModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DividerComponent } from './divider/divider.component';
import { PageHeaderContentComponent } from './page-header-content/page-header-content.component';
import { RateComponent } from './rate/rate.component';
import { IconsProviderModule } from 'src/app/home/icons-provider.module';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzIconModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent, DividerComponent, PageHeaderContentComponent, RateComponent, CarouselComponent],
  exports: [DividerComponent, PageHeaderContentComponent]
})
export class WelcomeModule { }
