import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';
import { CommunicationService } from 'src/app/services/update.service';

@Component({
  selector: 'app-mat-products',
  templateUrl: './mat-products.component.html',
  styleUrls: ['./mat-products.component.scss']
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
    private communicationService: CommunicationService

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
      this.getProduct.edit(this.productToEdit.id, this.myform.value.name, 
        this.myform.value.price, this.myform.value.image, this.myform.value.type).subscribe(res => {
          console.log(res);
        this.Closepopup();
        /*this.communicationService.updateProducts(res);*/
      });
      this.getProduct.getAllProducts().subscribe(profile => {
        this.communicationService.updateProducts(profile)
        console.log(profile)
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
