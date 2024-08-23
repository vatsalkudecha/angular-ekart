import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name = 'John Doe'
  addToCart: number = 0
  product = {
    name: 'iPhone 15',
    price: 1000,
    color:'Red',
    discount: 10,
    inStock: 5,
    pImage: '../../assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price * (100-this.product.discount)/100;
  }

  onNameChange(event: any) {
    // console.log(event)
    // this.name = event.target.value
  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  decrementCartValue() {
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
}
