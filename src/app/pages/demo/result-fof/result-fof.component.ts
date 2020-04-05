import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-fof',
  templateUrl: './result-fof.component.html'
})
export class ResultFofComponent {
  constructor(private router: Router) { }

  backToHome() {
    this.router.navigate(['./home/welcome']);
  }
}

