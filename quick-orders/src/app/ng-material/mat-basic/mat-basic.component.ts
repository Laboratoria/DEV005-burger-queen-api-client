import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserService } from 'src/app/services/create-user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-mat-basic',
  templateUrl: './mat-basic.component.html',
  styleUrls: ['./mat-basic.component.css']
})
export class MatBasicComponent implements OnInit {

  myForm: FormGroup;
  isSubmited = false;

  constructor(
    private createUserService: CreateUserService,
    private Ref: MatDialogRef<MatBasicComponent>,
    private builder: FormBuilder,

  ){  this.myForm  =  this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });
  }

  ngOnInit() {
  }

  Closepopup() {
    this.Ref.close();
  }

  myform = this.builder.group({
    correo: this.builder.control(''),
    contraseña: this.builder.control(''),
    rol: this.builder.control('')
  });

  Saveuser() {
    console.log(this.myForm.value);
  }

  createUser() {
    
  }


}
