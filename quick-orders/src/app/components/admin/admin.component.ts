import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { ProductsComponent } from "./products/products.component";



@Component ({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

activeView = 'view1';
data: User[];


    constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    ){
        this.data = [];     
    }

    ngOnInit(){
        this.getAllusers()
    }

    getAllusers() {
    
    this.usersService.profile().subscribe(profile => {
        this.data = profile
        console.log(this.data)
        })
    }
    
    activateView(view:string) {
        this.activeView = view;
    }

    activateView2(view:string) {
        this.activeView = view;
    }

   


}
