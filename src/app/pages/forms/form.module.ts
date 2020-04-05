import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormAuditComponent } from './form-audit/form-audit.component';
import { FormApprovalComponent } from './form-approval/form-approval.component';
import { FormDealComponent } from './form-deal/form-deal.component';
import { FormsComponent } from './forms.component';
import { StepsBarComponent } from './components/steps-bar/steps-bar.component';
import { IconsProviderModule } from 'src/app/home/icons-provider.module';
import { NgZorroAntdModule, NzIconModule } from 'ng-zorro-antd';
import { GradientComponent } from './components/gradient/gradient.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { FormsModule } from '@angular/forms';
import { DescComponent } from './components/desc/desc.component';

@NgModule({
  declarations: [
    FormsComponent,
    FormAuditComponent,
    FormApprovalComponent,
    FormDealComponent,
    StepsBarComponent,
    GradientComponent,
    CountdownComponent,
    SkeletonComponent,
    DescComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsRoutingModule
  ]
})
export class FormModule { }
