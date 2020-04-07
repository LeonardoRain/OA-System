import { Component, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-department-select',
  templateUrl: './department-select.component.html'
})
export class DepartmentSelectComponent implements DoCheck {
  department: string;

  @Output() toParent = new EventEmitter();

  nodes = [
    {
      title: '生产中心',
      key: '生产中心',
      expanded: true,
      icon: 'anticon anticon-smile-o',
      children: [
        {
          title: '制造部',
          key: '制造部',
          expanded: true,
          icon: 'anticon anticon-meh-o',
          // isLeaf: true,
          children: [
            {
              title: '生产计划部',
              key: '生产计划部',
              icon: 'anticon anticon-meh-o',
              isLeaf: true
            },
            {
              title: '装备车间',
              key: '装备车间',
              icon: 'anticon anticon-frown-o',
              isLeaf: true
            }
          ]
        },
        {
          title: '采购部',
          key: '采购部',
          expanded: true,
          icon: 'anticon anticon-frown-o',
          // isLeaf: true,
          children: [
            {
              title: '原材料库',
              key: '原材料库',
              icon: 'anticon anticon-meh-o',
              isLeaf: true
            },
            {
              title: '毛胚库',
              key: '毛胚库',
              icon: 'anticon anticon-frown-o',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];

  getDepartment() {
    this.toParent.emit(this.department);
  }

  ngDoCheck(): void {
    this.getDepartment();
  }
}
