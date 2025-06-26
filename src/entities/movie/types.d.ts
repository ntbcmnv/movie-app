export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IMovieDetails {
    id: number
    title: string
    overview: string
    poster_path: string
    genres: { id: number; name: string }[]
    release_date: string
    vote_average: number
}

export interface IMovieCast {
    id: number
    cast: {
        id: number
        name: string
        character: string
        profile_path: string | null
    }[]
}
