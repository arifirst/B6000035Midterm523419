import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  counter: number = 0;
  cartProduct: productsModel = [];
  total: number = 0

  constructor(private productsService: ProductService) { }

  add(id: number){
    console.log('Add product id: ' + id + ' to cart');
    this.cartProduct.push(this.productsService.getSomeProduct(id));
    this.total += this.productsService.getSomeProduct(id).price;
    this.counter = this.cartProduct.length;
  }

  getCounter(){
    return this.counter;
  }

  getsumPrice(){
    return this.total;
  }

  getCart(){
    return this.cartProduct;
  }

}
