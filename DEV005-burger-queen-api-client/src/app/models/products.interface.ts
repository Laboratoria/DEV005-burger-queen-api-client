export interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  type: string,
  category?: string,
  dateEntry: string,
}

export interface tabButton {
  name: string,
  label: string,
}

export interface Order {
  userId: number,
  client: string,
  products: [
    {
      qty: number,
      product: Product,
    }
  ]
  status: string,
  dateEntry: string,
}
