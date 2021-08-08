import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [
    { name: 'Ali', age: 'Ahmed', gender: 'Male' },
    { name: 'Fatima', age: 'Bin', gender: 'Female' },
    { name: 'Amna', age: 'Shakeel', gender: 'Female' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
