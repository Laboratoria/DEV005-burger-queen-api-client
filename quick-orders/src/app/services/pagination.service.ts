import { Injectable } from '@angular/core';
import { delay, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private totalItems = 100; 
  /*getItems(page=1, itemsPerPage = 6): {

  }*/

  constructor() { }
}
