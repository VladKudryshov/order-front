import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  detailCart: boolean = false;

  mouseEnter(divA: string) {

  }

  viewDetailCart() {
    this.detailCart = true;
  }

  closeDetailCart() {
    this.detailCart = false;
  }
}
