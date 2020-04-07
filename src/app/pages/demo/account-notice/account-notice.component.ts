import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-account-notice',
  templateUrl: './account-notice.component.html',
  styleUrls: ['./account-notice.component.less']
})
export class AccountNoticeComponent {
  constructor(private notification: NzNotificationService) { }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
