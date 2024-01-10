import axios from 'axios'

export type Movie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
type MovieResponse = {
    results: Movie[]
}

export async function getNowPlayingMovie() {
    const {data} = await axios.get<MovieResponse>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}` 
      }
    });

    return data.results
}

// Ale and Benny are working on this on the 10th of January


// export function  getSingleMovieData(movieID){

// }