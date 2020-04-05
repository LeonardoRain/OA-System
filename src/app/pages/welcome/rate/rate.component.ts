import { Component } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html'
})
export class RateComponent {
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 5;
}
