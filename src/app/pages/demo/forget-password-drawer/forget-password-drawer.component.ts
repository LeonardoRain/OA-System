import {
  Component
}

from '@angular/core';

@Component( {
    selector: 'app-forget-password-drawer',
    templateUrl: './forget-password-drawer.component.html',
    styleUrls: ['./forget-password-drawer.component.less']
  }

) export class ForgetPasswordDrawerComponent {
  visible=false;

  open(): void {
    this.visible=true;
  }

  close(): void {
    this.visible=false;
  }
}
