import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-standard-deviation',
  templateUrl: './calculate-standard-deviation.component.html',
  styleUrls: ['./calculate-standard-deviation.component.css'],
})
export class CalculateStandardDeviationComponent implements OnInit {
  dataString: string = '';
  dataError = '';
  answer: any;
  data: any[] = [];
  dataInput: any = [];

  ngOnInit(): void {
    this.dataError = '';
  }
  convertUserInputData() {
    let valid = false;
    if (this.dataString) {
      if (this.dataString.length > 0) {
        this.data = this.dataString.trim().split(',');
        this.data.forEach((itm, index) => {
          if (itm) {
            this.data[index] = parseFloat(this.data[index]);
            valid = true;
          } else {
            this.dataError = 'Please provide right population data';
            valid = false;
          }
        });
        return valid;
      } else {
        this.dataError = 'No population data provided';
        return false;
      }
    } else {
      this.dataError = 'No population data provided';
      return false;
    }
  }
  calculateSD() {
    if (this.convertUserInputData()) {
      this.dataError="";
      this.dataInput = [];
      this.dataInput = this.data;
    }
    else{
      this.answer="";
    }
  }
  calculatedSD(expressionAnswer: number) {
    this.answer = expressionAnswer;
  }
}
