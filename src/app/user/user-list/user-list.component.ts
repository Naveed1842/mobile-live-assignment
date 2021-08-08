import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { name: 'Ali', age: 'Ahmed', gender: 'male' },
    { name: 'Vic', age: 'Reynolds', gender: 'male' },
    { name: 'Gina', age: 'Jabowski', gender: 'female' }
];
  constructor() { }

  ngOnInit(): void {
  }

}
