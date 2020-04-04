import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pages/demo/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ChangePasswordComponent } from './pages/demo/change-password/change-password.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // 输入未知路径导航至home（待修改，应该导航到login或者404）
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
