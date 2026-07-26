export interface User{
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: UserRole
}

export enum UserRole{
    ADMIN = ' ADMIN',
    USER = ' USER'
}