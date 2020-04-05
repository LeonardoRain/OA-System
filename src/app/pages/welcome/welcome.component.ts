import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  @Input() getLoggedUser;

  loggedUserId: number;
  loggedUser: User;

  constructor(
  ) { }

  ngOnInit() {
  }
}
