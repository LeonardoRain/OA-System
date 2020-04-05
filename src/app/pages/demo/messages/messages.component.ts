import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  constructor(private message: NzMessageService) {}
}
