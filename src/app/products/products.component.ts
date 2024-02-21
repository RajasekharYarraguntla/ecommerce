import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      quantity: 0,
      image: 'https://source.unsplash.com/user/c_v_r/1900×800', // Update the path to your product image
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      quantity: 0,
      image: 'https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182', // Update the path to your product image
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      quantity: 0,
      image: 'https://placebear.com/g/200/200',
    },

    {
      name: 'Product 1',
      description: 'Description for Product 1',
      quantity: 0,
      image: 'https://placebear.com/g/200/200', // Update the path to your product image
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      quantity: 0,
      image: 'https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182', // Update the path to your product image
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      quantity: 0,
      image: 'https://placebear.com/g/200/200',
    },

  ];

  incrementQuantity(index: number) {
    this.products[index].quantity++;
  }

  decrementQuantity(index: number) {
    if (this.products[index].quantity > 0) {
      this.products[index].quantity--;
    }
  }

}
