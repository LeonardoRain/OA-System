import { Component, EventEmitter, DoCheck, Output } from '@angular/core';

@Component({
  selector: 'app-privilege-select',
  templateUrl: './privilege-select.component.html'
})
export class PrivilegeSelectComponent implements DoCheck {
  @Output() toParent = new EventEmitter();

  selectedPrivilege: string[];
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

  getPrivilege() {
    // emit()里的参数就是要传递的值，toParent就是上面EventEmitter 实例化的对象名称toParent
    this.toParent.emit(this.selectedPrivilege);
  }

  ngDoCheck(): void {
    this.getPrivilege();
  }
}
