import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormAuditComponent } from './form-audit/form-audit.component';
import { FormApprovalComponent } from './form-approval/form-approval.component';
import { FormDealComponent } from './form-deal/form-deal.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  },
  {
    // 表单审核
    path: 'formAudit',
    component: FormAuditComponent
  },
  {
    // 表单处理
    path: 'formDeal',
    component: FormDealComponent
  },
  {
    // 表单审批
    path: 'formApproval',
    component: FormApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
