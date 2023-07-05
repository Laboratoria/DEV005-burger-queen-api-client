export interface User {

        email: string;
        password:string;
        role: string;
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
