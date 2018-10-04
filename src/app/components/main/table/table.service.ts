import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../../../model/order';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class UserService {

  private serviceUrl = 'https://products-order.herokuapp.com/orders/current';

  constructor(private http: HttpClient) {
  }

  getUser(userId): Observable<Order[]> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Order[]>(this.serviceUrl,{userId: userId},{headers: headers});
  }

}
