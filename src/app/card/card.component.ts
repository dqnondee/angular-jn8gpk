import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();


  constructor(
    private cartService: CartService
  ) { }
}
