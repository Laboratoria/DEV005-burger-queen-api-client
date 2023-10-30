import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';

@Component({
  selector: 'app-products-order',
  templateUrl: './products-order.component.html',
  styleUrls: ['./products-order.component.css']
})
export class ProductsOrderComponent {
  constructor(private service: OrderProductService) { }
  @Output() productAdded = new EventEmitter<ProductInOrder>();
  @Input() products: ProductInOrder[] = [];

  addToOrder(product: ProductInOrder) {
    console.log(product);
    this.productAdded.emit(product);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  decrementProduct(index: number){
    if(this.products[index].qty > 1){
      this.products[index].qty = (this.products[index].qty || 0) - 1;
    } else {
      this.removeProduct(index);
    }
  }



  // hacer una funcion que conecte el boton con este componente
}

