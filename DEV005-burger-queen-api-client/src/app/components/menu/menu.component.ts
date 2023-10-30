import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Product, ProductInOrder } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service: ProductsService) { }
  @Output() productAdded = new EventEmitter<ProductInOrder>();
  private _activeTabInMenu = '';
  @Input()
  set activeTabInMenu(value: string) {
    this._activeTabInMenu = value;
    this.showProducts();
  }
  productList: Product[] = [];
  order: ProductInOrder[] = [];

  showProducts() {
    this.service.getProducts().subscribe((data) => {
      this.productList = data.filter(product => product.type === this._activeTabInMenu);
    })
  }

  addToOrder(product: Product) {
    console.log('Se hizo click en el boton menu')
    const order: ProductInOrder = {
      qty: 1,
      product: product,
    };

    this.productAdded.emit(order);
  }

}
