
export interface User {
    _id: string;
    email: string;
    role: string;
  }
  
  export interface Product {
    _id: string;
    name: string;
    type: string;
    price: number;
  }
  
  export interface Order {
    _id: string;
    client : string;
    dateEntry: string;
    dateProcessed: string;
    products: Array<{
      qty: number;
      product: Product;
    }>;
    status: string;
    userId: User
  }

  export interface CreateUser {
    email: string;
    password: string;
    role: string;
  }
  
  export interface CreateProduct {
    name: string;
    price: string;
    type: string;
  }
  
    
  export interface CreateOrder {
    userId: string;
    client : string;
    products: Array<{
      qty: number;
      product: string;
    }>;
  }
