import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }
  
  //Traer todos los productos
  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiURL}/products`);
  }
  
  // Traer solo un producto
  getOneProduct(id:number) {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  // Crear productos
create(name: string, price: number, image: string, type: string) {
  const body = {
    name: name,
    price : price,
    image : image,
    type: type
  }; 
  return this.http.post<Product[]>(`${this.apiURL}/products`, body);
}

// Editar producto
edit(id:number, name: string, price: number, image: string, type: string) {
  const body = {
    id : id,
    name: name,
    price : price,
    image : image,
    type: type
  }; 
  return this.http.patch<Product>(`${this.apiURL}/products/${id}`, body);
}

// Eliminar producto
delete(id:number) {
  return this.http.delete<Product>(`${this.apiURL}/products/${id}`);
}

// Crear una lista de productos
orderList(id:number){
  return this.http.get<Product>(`${this.apiURL}/orders/${id}`);
}

}
