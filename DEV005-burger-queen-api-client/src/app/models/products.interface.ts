export interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  type: string,
  dateEntry: string,
}

export interface ProductInOrder {
  qty: number,
  product: Product,
}

export interface tabButton {
  name: string,
  label: string,
}

export interface NewOrder {
  userId: number,
  client: string,
  products: ProductInOrder[]
  status: string,
  dateEntry: Date,
}

export interface ResponseOrder {
  id: number,
  userId: number,
  client: string,
  products: ProductInOrder[]
  status: string,
  dateEntry: Date,
}

export interface ProcessedOrder {
  id: number,
  userId: number,
  client: string,
  products: ProductInOrder[]
  status: string,
  dateEntry: Date,
  dateProcessed: Date,
}

export type RPOrder = ResponseOrder | ProcessedOrder;
