import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ManagementComponent } from './management/management.component';
import { UserManagementComponent } from './user-management.component';


const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent
  },
  {
    path: 'userRegister',
    component: UserRegisterComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
