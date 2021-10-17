import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import * as moment from 'moment';

export class CsvData {
  public id: any;
  public amount: any;
  public date: any;
  public score: any;
}
@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css'],
})
export class CsvUploadComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public records: any[] = [];
  isInValidRow: CsvData[] = [];
  isValidRow: CsvData[] = [];

  @ViewChild('csvReader') csvReader: any;

  jsondatadisplay: any;

  ngOnInit() {}
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        this.validateEachRow(this.records);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  addCoeffiicent(currentRecord: number, end: string) {
    let sellingPrice: number;
    let dueDate = new Date();
    let invoiceSubmitDate = moment(dueDate).format('YYYY-MM-DD');
    var start = moment(invoiceSubmitDate, 'YYYY-MM-DD');
    let diff: number = moment.duration(start.diff(end)).asDays();
    if (diff && diff < 30) {
      sellingPrice = currentRecord * 0.5;
    } else {
      sellingPrice = currentRecord * 0.3;
    }
    return sellingPrice;
  }
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = (<string>csvRecordsArray[i]).split(',');
      if (currentRecord.length == headerLength) {
        let csvRecord: CsvData = new CsvData();
        csvRecord.id = currentRecord[0];
        csvRecord.amount = currentRecord[1];
        csvRecord.date = currentRecord[2];
        csvRecord.score = this.addCoeffiicent(
          Number(currentRecord[1]),
          currentRecord[2]
        );
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
  //check etension
  validateEachRow(csvRecord: CsvData[]) {
    this.isInValidRow = [];
    this.isValidRow = [];
    let regExp = /[a-zA-Z]/g;
    csvRecord.forEach((item: CsvData) => {
      console.log('CSV', moment(item.date, 'YYYY-MM-DD', true).isValid());
      if (
        item.id === ' ' ||
        regExp.test(item.id) ||
        item.amount === ' ' ||
        regExp.test(item.amount) ||
        item.date === ' ' || 
        (moment(item.date, 'YYYY-MM-DD', true).isValid() ===false)
      ) {
        this.isInValidRow.push(item);
      } else {
        this.isValidRow.push(item);
      }
    });
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
    this.isInValidRow = [];
    this.isValidRow = [];
    this.jsondatadisplay = '';
  }

  uploadValidRecords() {
    console.log('uploadApi', this.isValidRow);
  }

  getJsonData() {
    this.jsondatadisplay = JSON.stringify(this.isInValidRow);
  }
}
