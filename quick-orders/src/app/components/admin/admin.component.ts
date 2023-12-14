import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBasicComponent } from "src/app/ng-material/mat-basic/mat-basic.component"; 
import { MatProductsComponent } from "src/app/ng-material/mat-products/mat-products.component";

@Component ({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

    modalVisible: boolean = false; 
    activeView = 'view1';


    constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    public dialog: MatDialog,
    
    ){ }

    ngOnInit(){}
    
    activateView(view:string) {
        this.activeView = view;
    }

    activateView2(view:string) {
        this.activeView = view;
    }

    activateView3(view:string) {
        this.activeView = view;
    }

    // Dinámica del usuario

    openDialog(id: number, title: any) {
        const dialogRef = this.dialog.open(MatBasicComponent, {
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

      addcustomer(){
        this.openDialog(1, 'Add Customer');
      }

      // Dinámica del producto

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

      addProduct(){
        this.openDialogProduct(1, 'Add Product');
      }

      logout() {
        this.router.navigate(['/login']);
      }
}
/*this.router.navigateByUrl('/admin');*/













