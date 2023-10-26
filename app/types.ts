export interface Band {
    id: number;
    bandname: string;
    selected: boolean;
    users: number[];
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
    releases: Array<{
        id: number;
    }>;
    editions: Array<{
        id: number;
    }>;
    presses: Array<{
        id: number;
    }>;
    shows: Array<{
        id: number;
    }>;
    tours: Array<{
        id: number;
    }>;
    videos: Array<{
        id: number;
    }>;
}

export interface Press {
    id: number;
    type: string;
    date: string;
    url: string;
    quote: string;
    visibility: string;
    displayBandname: string;
    publication: string;
    bands: Array<{
        id: number;
        bandname: string;
    }>;
    releases: Array<{
        id: number;
    }>;
    editions: Array<{
        id: number;
    }>;
    shows: Array<{
        id: number;
    }>;
    tours: Array<{
        id: number;
    }>;
    videos: Array<{
        id: number;
    }>;
}

export interface WritingTool {
    id: number;
    type: string;
    usable: boolean;
    used: number;
    users: Array<{
        id: number;
    }>;
    description: string;
    explanation: string;
    images: Array<{
        id: number;
        url: string;
    }>;
    links: Array<{
        id: number;
        text: string;
        url: string;
    }>;
}
