export interface Auth {
    id: number;
    email: string;
    password: string;
    accessToken: string;
    user: {
        role: string;
    };
    status: number;
    role: string;
}