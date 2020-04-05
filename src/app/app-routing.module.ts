import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/demo/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ResultFofComponent } from './pages/demo/result-fof/result-fof.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/welcome' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // 输入未知路径导航至home（待修改，应该导航到login或者404）
  {
    path: '**',
    component: ResultFofComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
