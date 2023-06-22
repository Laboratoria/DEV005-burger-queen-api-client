import { Component } from "@angular/core";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private storeService : StoreService
  ) {
    
  }

}

