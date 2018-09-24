import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {Product} from '../model/product';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  totalPrice: number;

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
   return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'BYN',
      minimumFractionDigits: 2
    }).format(this.getOrDefaultNumber())
  }

  onKey(event){
    if(this.totalPrice!==event.target.value){
      this.totalPrice = event.target.value/this.product.factor*this.product.price;
    }
  }

}
