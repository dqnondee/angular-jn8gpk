import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
}
import { Product } from './products';
/* . . . */
export class CartService {
  items: Product[] = [];
/* . . . */
}