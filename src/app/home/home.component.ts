import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../pages/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  isLoadingOne = false;
  isLoadingTwo = false;
  CurrentUser: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
      localStorage.removeItem('currentUser');
      this.router.navigate(['./login']);
    }, 1000);
  }
}
