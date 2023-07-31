import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.scss']
})
export class DesayunoComponent implements OnInit {
  faPlus = faPlusCircle;
menuBreakfast: Product [];
oneProduct: Product ;

constructor(
  private productService: ProductsService,
) {
this.menuBreakfast = [];
this.oneProduct = {} as Product;
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

getProduct(id:number){
  this.productService.getOneProduct(id).subscribe((profile) => {
    this.oneProduct = profile
    localStorage.setItem('data', JSON.stringify([profile]));
    console.log(this.oneProduct)
  })
}

agregarCard(id: number) {
  this.getProduct(id)
}

//Necesitamos hacer un post para guardar estos pedidos en una orden

}
