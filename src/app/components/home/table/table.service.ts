import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../../model/order';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class UserService {

  private serviceUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl);
  }

}
