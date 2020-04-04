import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../pages/demo/page-not-found/page-not-found.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../pages/welcome/welcome.module').then(module => module.WelcomeModule),
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
