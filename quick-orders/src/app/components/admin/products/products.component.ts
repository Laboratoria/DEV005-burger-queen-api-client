import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit { 

  products: Product[];

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private productsService: ProductsService,
    ){
      this.products = [];  
  }

  ngOnInit(){
    this.getAllproducts()
}

getAllproducts() {

  this.productsService.getAllProducts()
  .subscribe(profile => {
      this.products = profile
      console.log(this.products)
  })
}

}
