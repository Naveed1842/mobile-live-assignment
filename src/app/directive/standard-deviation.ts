import {
  Input,
  Directive
} from '@angular/core';

@Directive({
  selector: '[appStandardDeviation]'
})
export class calcStandardDeviation {
  @Input() date: string;
  dataError: string;
  dataString: string;
  data: any[] = [];
  constructor() 
    {}
  converStringToData() {
    let valid = false;
    if (this.date) {
      if (this.date.length > 0) {
        this.data = this.date.trim().split(',');
        this.data.forEach((itm, index) => {
          if (itm) {
            this.data[index] = parseFloat(this.data[index]);
            valid = true;
          } else {
            this.dataError = 'Invalid data';
            valid = false;
          }
        });
        return valid;
      } else {
        this.dataError = 'No data provided';
        return false;
      }
    } else {
      this.dataError = 'No data provided';
      return false;
    }
  }
  populationVariance(data: any) {
    let mean = this.mean(data);
    let sum = 0;
    data.forEach(itm => {
      sum += Math.pow(mean - itm, 2);
    });
    return sum / data.length;
  }
  mean(data: any) {
    return (
      data.reduce((ac, cv) => {
        return ac + cv;
      }) / data.length
    );
  }
  populationSD(data: any) {
    return Math.sqrt(this.populationVariance(data));
  }
  ngOnChanges() {
    if (this.converStringToData()) {
      let standardDeviation = this.populationSD(this.data);
    }
  }
  ngOnInit() {
    this.dataError = ' ';
  }
}
