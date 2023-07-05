import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit { 

  date: User[];

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    ){
      this.date = [];  
  }

  ngOnInit(){
    this.getAllusers()
}

  getAllusers() {
    
    this.usersService.profile().subscribe(profile => {
        this.date = profile
        console.log(this.date)
        })
    }

}
