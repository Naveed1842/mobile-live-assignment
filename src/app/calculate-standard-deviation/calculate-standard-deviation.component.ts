import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-standard-deviation',
  templateUrl: './calculate-standard-deviation.component.html',
  styleUrls: ['./calculate-standard-deviation.component.css']
})
export class CalculateStandardDeviationComponent implements OnInit {
  dataString;
  dataError;
  answer: any;
  data = [];
  dataInput:any=[];
  constructor() { }

  ngOnInit(): void {
        this.dataError = " "
  }
  converStringToData() {
    let valid = false;
    if(this.dataString){
      if (this.dataString.length > 0) {
      this.data = this.dataString.trim().split(',');
      this.data.forEach((itm, index) => {
        if (itm) {
          this.data[index] = parseFloat(this.data[index]);
          valid = true;
        } else {
          this.dataError = "Invalid data";
          valid = false;
        }
      })
      return valid
    } else {
      this.dataError = "No data provided";
      return false;
    }
    }else{
      this.dataError = "No data provided";
      return false;
    }
  }
  calculateSD(){
    if(this.converStringToData()){
      this.dataInput=[];
       this.dataInput = this.data;
    }
  }

}
