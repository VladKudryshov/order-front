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
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http
      .get('http://localhost:8080/product', {headers: headers})
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
