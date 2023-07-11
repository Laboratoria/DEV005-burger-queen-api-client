import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserService } from 'src/app/services/create-user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-mat-basic',
  templateUrl: './mat-basic.component.html',
  styleUrls: ['./mat-basic.component.css']
})
export class MatBasicComponent implements OnInit {

  myform: FormGroup;
  userToEdit: User; 
  editdata: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private createUserService: CreateUserService,
    private Ref: MatDialogRef<MatBasicComponent>,
    private builder: FormBuilder,
    private getUser: UsersService,

  ){  
    this.userToEdit = {} as User;
    this.editdata = {} as User;

    this.myform = this.builder.group(
      { correo: this.builder.control(''),
      contraseña: this.builder.control(''),
      rol: this.builder.control(''),
    });  
  }

  ngOnInit(): void { 
    console.log(this.data.id)
    if (this.data.title === 'Edit Customer') {
      this.setpopupdate(this.data.id);
    }
  }

  generateForm(){
    if(this.data.title === 'Edit Customer') {
      this.myform = this.builder.group(
      { correo: this.builder.control(this.userToEdit.email),
      contraseña: this.builder.control(this.userToEdit.password),
      rol: this.builder.control(this.userToEdit.role),
    });
  } 
  else {
      this.myform = this.builder.group(
      { correo: this.builder.control(''),
      contraseña: this.builder.control(''),
      rol: this.builder.control(''),
    });
  }    
  }

  setpopupdate(id: number) {
    this.getUser.getOneUser(id).subscribe(res => {
      this.userToEdit = res;
      console.log(this.userToEdit)
      this.generateForm()
    })
  }

  Closepopup() {
    this.Ref.close();
  }

  Saveuser() { 
    if(this.myform.value.id > 1) {
      this.getUser.edit(this.userToEdit.id, this.userToEdit.email, this.userToEdit.password, this.userToEdit.role).subscribe(res => {
        this.Closepopup();
        console.log(res);
      });
    } else {
      this.getUser.create(this.myform.value.correo, this.myform.value.contraseña, this.myform.value.rol)
      .subscribe(res=>{
        this.Closepopup();
        console.log(res);
      })
    }
  }
}
