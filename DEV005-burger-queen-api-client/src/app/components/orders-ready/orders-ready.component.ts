import { Component, OnInit } from '@angular/core';
import { ProcessedOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';

@Component({
  selector: 'app-orders-ready',
  templateUrl: './orders-ready.component.html',
  styleUrls: ['./orders-ready.component.css']
})
export class OrdersReadyComponent implements OnInit {
  // @Input() readyOrders: ResponseOrder[] = [];
  ordersReady: ProcessedOrder[] = [];
  prepTime = 0;
  constructor(private orderService: OrderProductService) {}

  ngOnInit(): void {
    this.getOrderReady();
  }

  getOrderReady() {
    this.orderService.getOrdersReady().subscribe((data) => {
      this.ordersReady = data.filter(order => order.status === 'ready');
      console.log(this.ordersReady);
    })
  }

}
