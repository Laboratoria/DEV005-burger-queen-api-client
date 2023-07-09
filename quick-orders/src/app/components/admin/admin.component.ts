import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { ModalComponent } from "./modal/modal.component";
import { MatDialog } from '@angular/material/dialog';
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

    openDialog() {
        const dialogRef = this.dialog.open(MatBasicComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

}
