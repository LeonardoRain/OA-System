users = [{
    id: 20200001,
    nickname: 'Leonardo',
    department: 'IOC',
    privilege: ['账号管理', '表单管理'],
    userName: 'LeonardoTest',
    password: '12345678',
    email: '987654321@qq.com',
    phoneNumberPrefix: '+86',
    phoneNumber: '15900000001',
    agree: true
  },
  {
    id: 20200002,
    nickname: 'Jessica',
    department: 'IOC',
    privilege: ['账号管理', '表单管理'],
    userName: 'JessicaTest',
    password: '12345678',
    email: '649134515@qq.com',
    phoneNumberPrefix: '+86',
    phoneNumber: '15900000002',
    agree: true
  },
  {
    id: 20200003,
    nickname: 'Neo',
    department: 'IOC',
    privilege: ['账号管理', '表单管理'],
    userName: 'NeoTest',
    password: '12345678',
    email: '159415466@qq.com',
    phoneNumberPrefix: '+86',
    phoneNumber: '15900000003',
    agree: true
  },
  {
    id: 20200004,
    nickname: 'Tim',
    department: 'IOC',
    privilege: ['账号管理', '表单管理'],
    userName: 'TimTest',
    password: '12345678',
    email: '892615878@qq.com',
    phoneNumberPrefix: '+86',
    phoneNumber: '15900000004',
    agree: true
  },
  {
    id: 20200005,
    nickname: 'Jacky',
    department: 'IOC',
    privilege: ['账号管理', '表单管理'],
    userName: 'JackyTest',
    password: '12345678',
    email: '679223168@qq.com',
    phoneNumberPrefix: '+86',
    phoneNumber: '15900000005',
    agree: true
  }
];

let arr = [];
users.map(user => {
  arr.push(Object.assign({}, user, {
    description: '广州市玄武无线科技股份有限公司',
    checked: false,
    expand: false
  }))
})

console.log(arr);
