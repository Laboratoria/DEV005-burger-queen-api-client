import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Product } from "src/app/models/products.model";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";
import { ProductsService } from "src/app/services/products.service";

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
    
    products: Product[];
    users: User[];

    constructor(
        private productsService: ProductsService,
        private usersService: UsersService,
      ) {
        this.products = [];
        this.users = [];
        this.productsService.getAllProducts().subscribe(profile => {
            this.products = profile
            console.log(this.products)
        });
        this.usersService.allUsers().subscribe(profile => {
          this.users = profile
          console.log(this.users)
        });
        
       }

  @Output()
  public productsChanged = new EventEmitter<Product[]>();
  public usersChanged = new EventEmitter<User[]>();

  public updateProducts(product: Product[]) {
    /*this.products.push(product);*/
    this.products = product;
    this.productsChanged.emit(this.products);
  }

  public updateUsers(user: User[]) {
    this.users = user;
    this.usersChanged.emit(this.users);
  }

}