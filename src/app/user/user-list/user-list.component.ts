import { Component, OnInit } from '@angular/core';
interface userInfo {
  name: string;
  age: number;
  gender: string;
}
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users:userInfo[] = [
    { name: 'Ali', age: 12, gender: 'Male' },
    { name: 'Fatima', age: 15, gender: 'Female' },
    { name: 'Amna', age: 25, gender: 'Female' },
  ];
  constructor() {}

  ngOnInit(): void {}

  addUserIntoList(item: userInfo) {
    this.users.push(item);
  }
}
