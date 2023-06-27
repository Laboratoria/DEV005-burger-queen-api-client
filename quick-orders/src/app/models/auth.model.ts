export interface Auth {
    id: number,
    email: string,
    password: string,
    accessToken: string,
    status: number,
    role: string;
}