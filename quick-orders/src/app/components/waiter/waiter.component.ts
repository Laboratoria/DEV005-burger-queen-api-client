import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {

  faTrash = faTrash;

constructor(
  private router: Router,
) {
  
}

  ngOnInit() {
    
  }

  logout() {
    this.router.navigate(['/login']);
  }

}

