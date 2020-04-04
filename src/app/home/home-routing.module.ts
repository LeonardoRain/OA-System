import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../pages/demo/page-not-found/page-not-found.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { DemoComponent } from '../pages/demo/demo.component';


const routes: Routes = [
  // {
  //   path: 'home',
  //   children: [
  //     {
  //       path: 'welcome',
  //       component: WelcomeComponent
  //     },
  //     {
  //       path: 'userManagement',
  //       loadChildren: () => import('../pages/user-management/user-management.module').then(module => module.UserManagementModule),
  //     },
  //     {
  //       path: 'demo',
  //       loadChildren: () => import('../pages/demo/demo.module').then(module => module.DemoModule),
  //     }
  //   ]
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'userManagement',
    loadChildren: () => import('../pages/user-management/user-management.module').then(module => module.UserManagementModule),
  },
  {
    path: 'demo',
    loadChildren: () => import('../pages/demo/demo.module').then(module => module.DemoModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
