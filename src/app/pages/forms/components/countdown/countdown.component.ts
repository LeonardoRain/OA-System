import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
