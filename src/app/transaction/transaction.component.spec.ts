import { TransactionComponent } from './transaction.component';
import { Component, OnInit } from '@angular/core';

describe('TransactionComponent', () => {
  
  it('should create an instance', () => {
    let registerComponent: TransactionComponent = new TransactionComponent(this.dataholderService);
    expect(registerComponent.items).toBeUndefined();
    
  });
});
