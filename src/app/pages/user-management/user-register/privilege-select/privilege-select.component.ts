import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privilege-select',
  templateUrl: './privilege-select.component.html'
})
export class PrivilegeSelectComponent {
  @Input()
  privilege: string[];
  value: string[] = ['0-0-0'];
  nodes = [
    {
      title: '用户管理',
      value: '0-0',
      key: '用户管理'
    },
    {
      title: '表单管理',
      value: '0-1',
      key: '表单管理',
      children: [
        {
          title: '表单审核',
          value: '0-1-0',
          key: '表单审核',
          isLeaf: true
        },
        {
          title: '表单处理',
          value: '0-1-1',
          key: '表单处理',
          isLeaf: true
        },
        {
          title: '表单审批',
          value: '0-1-2',
          key: '表单审批',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    this.privilege = $event;
  }
}
