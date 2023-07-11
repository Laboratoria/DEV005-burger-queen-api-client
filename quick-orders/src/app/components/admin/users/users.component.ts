import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { DeleteService } from "src/app/services/delete.service";
import { EditService } from "src/app/services/edit.service";
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
    private deleteUser: DeleteService,
    private editUser: EditService,
    public dialog: MatDialog,

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

  deleteThisUser(){
    this.deleteUser.delete().subscribe(profile => {
    })
  }

  /*editThisUser(){
    this.editUser.edit()
  }*/

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
    this.openDialog(1, 'Ads Customer');
  }

}
