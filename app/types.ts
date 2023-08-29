export interface Band {
    id: number;
    bandname: string;
    selected: boolean;
}

export interface User {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    email: string;
    id: number;
    provider: string;
    updatedAt: string;
    username: string;
}

export interface Post {
    id: number;
    date: string;
    subject: string;
    text: string;
    // bands: (string | number)[];
}