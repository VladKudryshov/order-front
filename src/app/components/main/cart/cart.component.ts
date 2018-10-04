import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormatUtils} from '../../../utils/FormatUtils';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {isEmpty} from 'rxjs/operators';
import {LogicalUtils} from '../../../utils/LogicalUtils';


export interface tableProduct {
  name: string;
  weight: number;
  dimension: string;
  totalPrice: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  bookingProducts: tableProduct[] = [];
  currency = FormatUtils.currency;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayedColumns: string[] = ['select', 'name', 'weight', 'totalPrice', 'action'];
  dataSource;
  selection = new SelectionModel<tableProduct>(true, []);

  constructor(private http: HttpClient,private _formBuilder: FormBuilder ) { }


  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http
      .post('http://localhost:8080/orders', {orderId: "000002"}, {headers: headers})
      .subscribe((data: tableProduct[]) => {
        this.bookingProducts = data;
        this.dataSource = new MatTableDataSource<tableProduct>(this.bookingProducts);
      });
  }

  isAllSelected() {
    if (this.dataSource!==null && this.dataSource!==undefined){
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
    return true;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getTotalCost() {
    if(this.selection.isEmpty()) return this.currency(0);
    return this.currency(this.dataSource.data
      .filter(row => this.selection.isSelected(row)?row.totalPrice:0)
      .map(row=>row.totalPrice)
      .reduce((f1,f2)=>f1+f2));
  }

  print(row){
    console.log(row);
  }

  next(stepper){
    if(!this.selection.isEmpty()){
      stepper.next();
    }
  }
}
