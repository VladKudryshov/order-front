import {Component} from '@angular/core';
import {UserService} from './table.service';
import {DataSource} from '@angular/cdk/table';
import {Order} from '../../../model/order';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name','price', 'quantity',  'totalPrice'];
  constructor(private userService: UserService) { }

}


export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<Order[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
