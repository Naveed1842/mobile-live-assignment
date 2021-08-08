import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;
  genderList: any = ['Male', 'Female'];

  constructor() { 
    this.form = new FormGroup({
      username: new FormControl(),
      age: new FormControl(),
      gender: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  changeCity(event:any){
    console.log(event)
  }

  onSubmit(){

  }
}
