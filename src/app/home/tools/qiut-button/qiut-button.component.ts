import { Component } from '@angular/core';

@Component({
  selector: 'app-qiut-button',
  templateUrl: './qiut-button.component.html',
  styleUrls: ['./qiut-button.component.css']
})
export class QiutButtonComponent {
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}
