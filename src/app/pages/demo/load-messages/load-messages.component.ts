import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-load-messages',
  templateUrl: './load-messages.component.html'
})
export class LoadMessagesComponent {
  constructor(private message: NzMessageService) { }

  startShowMessages(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.message
      .loading('正在登陆', { nzDuration: 2500 })
      .onClose!.pipe(
        // tslint:disable-next-line: no-non-null-assertion
        concatMap(() => this.message.success('登陆成功', { nzDuration: 2500 }).onClose!),
        // tslint:disable-next-line: no-non-null-assertion
        concatMap(() => this.message.info('欢迎使用 OA System !', { nzDuration: 2500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
      });
  }
}
