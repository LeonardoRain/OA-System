import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-page-header-content',
  templateUrl: './page-header-content.component.html',
  styleUrls: ['./page-header-content.component.css']
})
export class PageHeaderContentComponent implements OnInit {
  CurrentUser: User;

  ngOnInit(): void {
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
