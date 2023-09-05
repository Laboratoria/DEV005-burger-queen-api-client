import { Component } from '@angular/core';
import { ProductInOrder, tabButton } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service'; // Importa el servicio adecuado

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

  constructor(private service: OrderProductService) { } // Inyecta el servicio

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

  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    });
  }

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }

  OnUpdateName(name: string){
    console.log(this.clientName = name, 'Llego el nombre')
    this.clientName = name;
  }
  onUpDateTableInOrder(tableNumber: string) {
    console.log(this.tableNumber = tableNumber, 'llego el numero');
    this.tableNumber = tableNumber;
      }

}
