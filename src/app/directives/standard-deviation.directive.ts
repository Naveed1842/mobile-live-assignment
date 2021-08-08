import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appStandardDeviation]',
})
export class StandardDeviationDirective {
  @Input() userInputData: any;
  @Output() standardDeviationEvent = new EventEmitter<number>();
  ngOnChanges() {
    if (this.userInputData.length > 0) {
      let standardDeviation = this.calculateSD(this.userInputData);
      let calculatedSD = Math.round(100 * standardDeviation) / 100;
      this.standardDeviationEvent.emit(calculatedSD);
    }
  }
  calculateSD(data: any) {
    return Math.sqrt(this.calculateVariance(data));
  }

  calculateVariance(data: any) {
    let mean = this.calculateMean(data);
    let sum = 0;
    data.forEach((itm: any) => {
      sum += Math.pow(mean - itm, 2);
    });
    return sum / data.length;
  }

  calculateMean(data: any) {
    return (
      data.reduce((ac: any, cv: any) => {
        return ac + cv;
      }) / data.length
    );
  }
}
