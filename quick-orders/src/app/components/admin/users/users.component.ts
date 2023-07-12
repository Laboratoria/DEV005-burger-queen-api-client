import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBasicComponent } from "src/app/ng-material/mat-basic/mat-basic.component";

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
    public dialog: MatDialog,

    ){
        this.data = [];     
    }

    ngOnInit(){
      this.getAllusers()
  }

  getAllusers() {
  this.usersService.allUsers().subscribe(profile => {
      this.data = profile
      console.log(this.data)
      })
  }

  deleteThisUser(id:number){
    console.log(id);
    this.usersService.delete(id).subscribe(profile => {
      console.log(profile);
    })
    this.getAllusers(); 
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

  editcustomer(id: number){
    this.openDialog(id, 'Edit Customer');
  }

  addcustomer(){
    this.openDialog(1, 'Add Customer');
  }

}
