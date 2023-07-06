export interface Product {

    id:string;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
}

export interface CreateUserDTO extends Omit<Product, 'id'> {}