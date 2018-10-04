import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {FormatUtils} from '../../../utils/FormatUtils';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  currency = FormatUtils.currency;

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Credentials", 'true');
    this.http
      .get('https://products-order.herokuapp.com/product', {headers: headers})
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  openDialog(product) {
    this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: product
    });
  }


}
