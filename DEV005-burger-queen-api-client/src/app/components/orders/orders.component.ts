import { Component, Input, OnChanges } from '@angular/core';
import { ProductInOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// import { Order } from 'src/app/models/products.interface';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {
  @Input() clientName = '';
  @Input() productOrderList: ProductInOrder[] = [];
  @Input() tableNumber = '';
  constructor(private service: OrderProductService) { }

  ngOnChanges(): void {
    console.log(this.productOrderList);
  }

  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }

  onProductClicked(productInOrder: ProductInOrder) {
    const index = this.productOrderList.findIndex(item => item.product.name === productInOrder.product.name);
    if (index !== -1) {
      this.productOrderList[index].qty = (this.productOrderList[index].qty + 1)
    } else {
      this.productOrderList.push({
        qty: 1,
        product: {
          id: productInOrder.product.id,
          name: productInOrder.product.name,
          price: productInOrder.product.price,
          image: productInOrder.product.image,
          type: productInOrder.product.type,
          dateEntry: productInOrder.product.dateEntry,
        }
      })
    }
  }
  upDateTableInOrder(tableNumber: string) {
this.tableNumber = tableNumber;
  }

}
