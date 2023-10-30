import { Component } from '@angular/core';
import { NewOrder } from 'src/app/models/products.interface';
// Paso 3.. el paso 4 esta en WAITER.HTML
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent {
  readyOrders: NewOrder[] = [];

  onOrdersReady(order: NewOrder) {
    this.readyOrders.push(order);
  }

}
