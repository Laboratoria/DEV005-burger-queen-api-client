import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product, ProductInOrder } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private service: ProductsService) { }
  @Output() productAdded = new EventEmitter<ProductInOrder>();
  @Input() activeTabInMenu = '';

  productList: Product[] = [];
  order: ProductInOrder[] = [];

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.service.getProducts().subscribe((data) => {
      this.productList = data.filter(product => product.type === this.activeTabInMenu);
    })
  }

  addToOrder(product: Product){
    const order: ProductInOrder = {
      qty: 1,
      product: product,
    };

    this.productAdded.emit(order);
  }
}
