import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

menuBreakfast: Product [];

constructor(
  private productService: ProductsService,
) {
this.menuBreakfast = [];
}

ngOnInit(){
  this.getProducts()
}

getProducts() {
  this.productService.getAllProducts().subscribe(profile =>  {
    this.menuBreakfast = profile
    console.log(this.menuBreakfast)
  })
}




}
