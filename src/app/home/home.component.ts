import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../pages/models/user.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  // 问好 对应时间
  hourNow: number;
  greet: string;

  isCollapsed = false;
  isLoading = false;
  CurrentUser: User;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.hourNow = new Date().getHours();
    if (this.hourNow < 6) {
      this.greet = '凌晨好，';
    } else if (this.hourNow < 9) {
      this.greet = '早上好，';
    } else if (this.hourNow < 12) {
      this.greet = '上午好，';
    } else if (this.hourNow < 14) {
      this.greet = '中午好，';
    } else if (this.hourNow < 17) {
      this.greet = '下午好，';
    } else if (this.hourNow < 19) {
      this.greet = '傍晚好，';
    } else if (this.hourNow < 22) {
      this.greet = '晚上好，';
    } else {
      this.greet = '夜里好，';
    }
  }

  // 退出登陆
  logout(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.authService.logout();
      this.isLoading = false;
      localStorage.removeItem('currentUser');
      this.router.navigate(['./login']);
    }, 1000);
  }
}
