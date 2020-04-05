import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Auth guard pass!');
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Auth guard canActivateChild');
    if (this.authService.loginUser.privilege.indexOf('用户管理') !== -1) {
      return true;
    } else {
      alert('您暂无此权限，请联系管理员获取！');
      this.router.navigate(['/home/welcome']);
      return false;
    }
  }
}
