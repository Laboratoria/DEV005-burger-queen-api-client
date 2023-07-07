import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";



@Component ({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

activeView = 'view1';


    constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
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



}
