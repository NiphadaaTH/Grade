export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Session {
    id: string;
    userId: string;
    expiresAt: Date;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface RegisterDTO {
    email: string;
    username: string;
    password: string;
}
