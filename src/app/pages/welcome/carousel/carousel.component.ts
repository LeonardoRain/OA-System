import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent {
  array = [
    { imgUrl: '../../../../assets/images/bg59.jpg' },
    { imgUrl: '../../../../assets/images/bg48.jpg' },
    { imgUrl: '../../../../assets/images/bg51.jpg' },
    { imgUrl: '../../../../assets/images/bg50.jpg' },
    { imgUrl: '../../../../assets/images/bg54.jpg' },
    { imgUrl: '../../../../assets/images/bg60.jpg' }
  ];
  dotPosition = 'right';
}
