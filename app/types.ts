export interface Band {
    id: number;
    bandname: string;
    selected: boolean;
}

export interface User {
    id: number;
    username: string;
}

export interface Post {
    id: number;
    date: string;
    subject: string;
    text: string;
    bands: Array<{
        id: number;
        bandname: string;
    }>;
}