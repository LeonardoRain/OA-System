import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../pages/demo/page-not-found/page-not-found.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AuthGuard } from '../services/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        // 欢迎使用
        path: 'welcome',
        loadChildren: () => import('../pages/welcome/welcome.module').then(module => module.WelcomeModule)
      },
      {
        // 用户管理
        path: 'userManagement',
        loadChildren: () => import('../pages/user-management/user-management.module').then(module => module.UserManagementModule),
        canActivateChild: [AuthGuard]
      },
      {
        // 个人中心
        path: 'demo',
        loadChildren: () => import('../pages/demo/demo.module').then(module => module.DemoModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
