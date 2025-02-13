export interface IMovie {
    adult: boolean;
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    release_year: string
}


export interface IMovieList {
    results: IMovie[];
    total_pages: number;
    total_results: number
}

export interface IGenre {
    id: number;
    name: string
}

export interface IMovieDetail {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: number;
    runtime: number;
    runtime_hours: number;
    runtime_minutes: number;
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    release_year: string;
}

export interface IGenre {
    id: number;
    name: string;
    slug?: string;
}