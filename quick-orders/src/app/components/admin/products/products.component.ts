import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/products.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBasicComponent } from "src/app/ng-material/mat-basic/mat-basic.component";
import { MatProductsComponent } from "src/app/ng-material/mat-products/mat-products.component";

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
    public dialog: MatDialog,
    ){
      this.products = [];  
  }

  ngOnInit(){
    this.getAllproducts()
}

getAllproducts() {
this.productsService.getAllProducts().subscribe(profile => {
      this.products = profile
      console.log(this.products)
  })
}


deleteThisProduct(id:number){
  console.log(id);
  this.productsService.delete(id).subscribe(profile => {
    console.log(profile);
  })
  this.getAllproducts(); 
}

openDialogProduct(id: number, title: any) {
  const dialogRef = this.dialog.open(MatProductsComponent, {
      width: '60%',
      height: '80%',
      data: {
          title: title,
          id: id
      }});
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

editProduct(id: number){
  this.openDialogProduct(id, 'Edit Product');
}

addProduct(){
  this.openDialogProduct(1, 'Add Product');
}


}
















