import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {Product} from '../../../model/product';
import {FormatUtils} from '../../../utils/FormatUtils';
import {LogicalUtils} from '../../../utils/LogicalUtils';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  totalPrice: number;
  currency = FormatUtils.currency;

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    console.log(this.totalPrice);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  getOrDefaultNumber(){
    return (this.totalPrice === null || this.totalPrice === undefined) ?  0: this.totalPrice;
  }

  getTotalPrice(){
    return FormatUtils.currency(LogicalUtils.numberIsNull(this.totalPrice));
  }

  onKey(event){
    if(this.totalPrice!==event.target.value){
      this.totalPrice = event.target.value/this.product.factor*this.product.price;
    }
  }

}
