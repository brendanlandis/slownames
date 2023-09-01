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
    headline: string;
    text: string;
    bands: Array<{
        id: number;
        bandname: string;
    }>;
}