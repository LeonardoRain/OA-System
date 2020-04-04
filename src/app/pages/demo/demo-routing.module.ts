import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DemoComponent } from './demo.component';


const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
