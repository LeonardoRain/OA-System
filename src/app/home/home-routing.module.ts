import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { AuthFormsGuard } from '../services/auth/auth-forms.guard';
import { ResultFofComponent } from '../pages/demo/result-fof/result-fof.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      {
        // 欢迎使用
        path: 'welcome',
        loadChildren: () => import('../pages/welcome/welcome.module').then(module => module.WelcomeModule)
      },
      {
        // 个人中心
        path: 'demo',
        loadChildren: () => import('../pages/demo/demo.module').then(module => module.DemoModule)
      },
      {
        // 用户管理
        path: 'userManagement',
        loadChildren: () => import('../pages/user-management/user-management.module').then(module => module.UserManagementModule),
        canActivateChild: [AuthGuard]
      },
      {
        // 表单管理
        path: 'forms',
        loadChildren: () => import('../pages/forms/form.module').then(module => module.FormModule),
        canActivateChild: [AuthFormsGuard]
      },
      {
        path: '**',
        component: ResultFofComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
