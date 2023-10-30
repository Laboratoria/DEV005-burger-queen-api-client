import { Component, OnInit } from '@angular/core';
import { ProcessedOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  ordersReady: ProcessedOrder[] = [];

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
