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
    headers.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append("Access-Control-Allow-Credentials", 'true');
    return this.http.post<Order[]>(this.serviceUrl,{userId: userId},{headers: headers});
  }

}
