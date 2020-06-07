import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataholderService } from '../dataholder.service';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  bankForm;
  bankData = [];
  todate: Date = new Date();
  cal;

  addToTransaction(bankData){
    this.dataholderService.addToTransaction(bankData);
    // window.alert('Your product has been added to the cart!');
  }

  // calculate(){
  //   let cal = 0;
  //   for(let i = 0 ; i < this.bankData.length ; i++){
  //     cal = cal + this.bankData[i].amount;
  //     console.log(cal);
  //   }
  // }

  // addToTransaction(){
  //   this.bankData.push()

  // }

  constructor(
    private formBuilder:FormBuilder,
    private dataholderService:DataholderService,
  ) { 
    this.bankForm = this.formBuilder.group({
      date:'',
      description:'',
      account:'',
      amount:'',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    
    console.log(customerData.date);
    // this.bankData.push(customerData);
    // console.log(this.bankData[1]);
    // this.dataholderService.setData(customerData);
    this.addToTransaction(customerData);
    // console.log(this.dataholderService.getData()[0]);
    this.cal = this.dataholderService.calculate();
    console.log(this.cal);
  }


}
