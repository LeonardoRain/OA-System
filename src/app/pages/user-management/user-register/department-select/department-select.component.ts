import { Component } from '@angular/core';

@Component({
  selector: 'app-department-select',
  templateUrl: './department-select.component.html'
})
export class DepartmentSelectComponent {
  value: string;
  nodes = [
    {
      title: '生产中心',
      key: '100',
      expanded: true,
      icon: 'anticon anticon-smile-o',
      children: [
        {
          title: '制造部',
          key: '10010',
          expanded: true,
          icon: 'anticon anticon-meh-o',
          // isLeaf: true,
          children: [
            {
              title: '生产计划部',
              key: '1001001',
              icon: 'anticon anticon-meh-o',
              isLeaf: true
            },
            {
              title: '装备车间',
              key: '1001002',
              icon: 'anticon anticon-frown-o',
              isLeaf: true
            }
          ]
        },
        {
          title: '采购部',
          key: '10011',
          expanded: true,
          icon: 'anticon anticon-frown-o',
          // isLeaf: true,
          children: [
            {
              title: '原材料库',
              key: '1001101',
              icon: 'anticon anticon-meh-o',
              isLeaf: true
            },
            {
              title: '毛胚库',
              key: '1001102',
              icon: 'anticon anticon-frown-o',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];
}
