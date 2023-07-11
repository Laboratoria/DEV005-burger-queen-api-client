import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBasicComponent } from "src/app/ng-material/mat-basic/mat-basic.component"; 

@Component ({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

    modalVisible: boolean = false; 
    activeView = 'view1';


    constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    public dialog: MatDialog,
    
    ){ 

    }

    ngOnInit(){
    }
    
    activateView(view:string) {
        this.activeView = view;
    }

    activateView2(view:string) {
        this.activeView = view;
    }

    activateView3(view:string) {
        this.activeView = view;
    }

    openDialog(id: number, title: any) {
        const dialogRef = this.dialog.open(MatBasicComponent, {
            width: '60%',
            data: {
                title: title,
                id: id
            }});
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

      addcustomer(){
        this.openDialog(1, 'Add. Customer');
      }
}













