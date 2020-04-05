import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../pages/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersApi = 'http://localhost:3200/users';

  constructor(private http: HttpClient) {
  }

  // 得到所有的user数据信息
  index() {
    return this.http.get(this.usersApi);
  }

  // 添加新的员工
  addNewUser(newUser: User) {
    return this.http.post<User>(this.usersApi, newUser);
  }

  // 修改密码
  changePassword(id: number, ModifiedInfo: string) {
    return this.http.patch<User>(`${this.usersApi}/${id}`, ModifiedInfo);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.usersApi}/${id}`);
  }

}
