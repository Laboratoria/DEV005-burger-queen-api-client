export interface Auth {
    accessToken: string;
    user: {
        role: string;
    };
    status: number;
}

export interface CreateUserDTO extends Omit<Auth, 'id'> {}