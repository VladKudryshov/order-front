import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../../../model/order';
import {logger} from 'codelyzer/util/logger';
import {FormatUtils} from '../../../utils/FormatUtils';
import {LogicalUtils} from '../../../utils/LogicalUtils';

@Component({
  selector: 'order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit, OnChanges {

  @Input() order: string;
  bookingProducts: Object[] = [];
  currency = FormatUtils.currency;

  constructor(private http: HttpClient  ) { }

  ngOnInit() {

  }

  ngOnChanges(){
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http
      .post('https://products-order.herokuapp.com/orders', {orderId: this.order}, {headers: headers})
      .subscribe((data: Object[]) => {
        this.bookingProducts = data;
      });
  }

  getTotalPrice(){
    return LogicalUtils.arrayIsEmpty(this.bookingProducts) ? 0 : this.currency(this.bookingProducts.map(f => f['totalPrice']).reduce((f1, f2) => f1 + f2));
  }

}
