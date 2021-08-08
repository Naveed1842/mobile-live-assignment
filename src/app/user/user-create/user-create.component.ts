import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface userInfo {
  name: string;
  age: number;
  gender: string;
}
@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;

  genderList: string[] = ['Male', 'Female'];
  @Output() newItemEvent = new EventEmitter<userInfo>();
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const { name, age, gender } = this.form.value;
      const userInfo: userInfo = {
        name: name,
        age: age,
        gender: gender,
      };
      this.newItemEvent.emit(userInfo);
      this.form.reset();
    }
  }
}
