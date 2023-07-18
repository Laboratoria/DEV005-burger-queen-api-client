import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/products.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBasicComponent } from "src/app/ng-material/mat-basic/mat-basic.component";
import { MatProductsComponent } from "src/app/ng-material/mat-products/mat-products.component";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

}
