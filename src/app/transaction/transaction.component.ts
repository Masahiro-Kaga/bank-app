import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { DataholderService } from '../dataholder.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  // bankData = bankData;

  items;
  todate: Date = new Date();


  constructor(
    private dataholderService:DataholderService,
  ) { }

  ngOnInit(): void {
    this.items = this.dataholderService.getData();
  }

}