import { Component } from '@angular/core';
import { ProductInOrder, tabButton, NewOrder } from 'src/app/models/products.interface';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  productOrderList: ProductInOrder[] = [];
  activeTab = 'Desayuno';
  tabMenu: tabButton[] = [
    { name: 'Desayuno', label: 'Desayunos' },
    { name: 'Almuerzo', label: 'Almuerzos/Cenas' }
  ];
  clientName = '';
  tableNumber = '';
  orders: NewOrder[] = [];

  onProductClicked(productInOrder: ProductInOrder) {
    console.log('onProductClicked se está ejecutando', productInOrder);
    const index = this.productOrderList.findIndex(item => item.product.name === productInOrder.product.name);
    if (index !== -1) {
      this.productOrderList[index].qty = (this.productOrderList[index].qty + 1);
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
      });
    }
  }

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }

  OnUpdateName(name: string) {
    this.clientName = name;
  }

  onUpDateTableInOrder(tableNumber: string) {
    this.tableNumber = tableNumber;
  }

  onOrderCreated(order: NewOrder) {
    this.orders.push(order);
    this.clientName = '';
    this.tableNumber = '';
    this.productOrderList = [];
  }

}
