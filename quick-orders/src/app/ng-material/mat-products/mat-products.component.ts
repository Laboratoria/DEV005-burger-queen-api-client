import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-mat-products',
  templateUrl: './mat-products.component.html',
  styleUrls: ['./mat-products.component.css']
})
export class MatProductsComponent {

  myform: FormGroup;
  productToEdit: Product; 
  editdata: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<MatProductsComponent>,
    private builder: FormBuilder,
    private getProduct: ProductsService,

  ){  
    this.productToEdit = {} as Product;
    this.editdata = {} as Product;

    this.myform = this.builder.group(
      { name: this.builder.control(''),
      price: this.builder.control(''),
      image: this.builder.control(''),
      type: this.builder.control(''),
    });  
  }

  ngOnInit(): void { 
    console.log(this.data.id)
    if (this.data.title === 'Edit Product') {
      this.setpopupdate(this.data.id);
    }
  }

  generateForm(){
    if(this.data.title === 'Edit Product') {
      this.myform = this.builder.group(
      { name: this.builder.control(this.productToEdit.name),
      price: this.builder.control(this.productToEdit.price),
      image: this.builder.control(this.productToEdit.image),
      type: this.builder.control(this.productToEdit.type),
    });
  } 
  else {
      this.myform = this.builder.group(
      { name: this.builder.control(''),
        price: this.builder.control(''),
        image: this.builder.control(''),
        type: this.builder.control(''),
    });
  }    
  }

  setpopupdate(id: number) {
    this.getProduct.getOneProduct(id).subscribe(res => {
      this.productToEdit = res;
      console.log(this.productToEdit)
      this.generateForm()
    })
  }

  Closepopup() {
    this.Ref.close();
  }

  Saveproduct() { 
    console.log(this.productToEdit.id, "usertoedit")
    if(this.productToEdit.id > 1) {
      this.getProduct.edit(this.productToEdit.id, this.productToEdit.name, 
        this.productToEdit.price, this.productToEdit.image, this.productToEdit.type).subscribe(res => {
        console.log(res);
        this.Closepopup();
      });
    } else {
      this.getProduct.create(this.myform.value.name, 
        this.myform.value.price, this.myform.value.image, this.myform.value.type)
      .subscribe(res=>{
        console.log(res);
        this.Closepopup();
      })
    }
  }


}
