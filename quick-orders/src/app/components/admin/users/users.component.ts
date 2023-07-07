import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {

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

}
