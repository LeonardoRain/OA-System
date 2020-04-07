import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManagementComponent } from './management/management.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { DepartmentSelectComponent } from './user-register/department-select/department-select.component';
import { PrivilegeSelectComponent } from './user-register/privilege-select/privilege-select.component';
import { SearchComponent } from './management/search/search.component';
import { GenderSelectComponent } from './user-register/gender-select/gender-select.component';


@NgModule({
  declarations:
    [UserManagementComponent,
      UserRegisterComponent,
      ManagementComponent,
      DepartmentSelectComponent,
      PrivilegeSelectComponent,
      SearchComponent,
      GenderSelectComponent
    ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    NzTableModule,
    NzSwitchModule
  ]
})
export class UserManagementModule { }
