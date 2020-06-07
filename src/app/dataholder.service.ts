import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataholderService {

  bankTS = [];
  todate: Date = new Date();


  addToTransaction(bankData){
    this.bankTS.push(bankData);

  }

  getData() {
    return this.bankTS;
  }

  // setData(array){
  //   if(array.date = ""){
  //     array.date = this.todate;
  //   }
  //   console.log(array);
  // }

  calculate(){
    let cal = 0;
    for(let i = 0 ; i < this.bankTS.length ; i++){
      cal = cal + this.bankTS[i].amount;
      console.log(cal);
    }
    return cal;
  }

  clearData() {
    this.bankTS = [];
    return this.bankTS;
  }

  constructor() { }
}
