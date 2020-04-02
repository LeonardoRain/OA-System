import { Component } from '@angular/core';

@Component({
  selector: 'app-privilege-select',
  templateUrl: './privilege-select.component.html'
})
export class PrivilegeSelectComponent {
  value: string[] = ['0-0-0'];
  nodes = [
    {
      title: '账号管理',
      value: '0-0',
      key: '0-0'
    },
    {
      title: '表单管理',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: '表单审核',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true
        },
        {
          title: '表单处理',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true
        },
        {
          title: '表单审批',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }
}
