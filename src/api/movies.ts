import axios from 'axios';

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type Personell = {
  id: number,
  name: string,
  profile_path: string,
  positions: string[]
}

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
  movieId: number;
  vote_average: number;
  runtime: number;
};

type MovieResponse = {
  results: Movie[];
};

export interface SingleMovie extends Movie {
  genres: Array[];
  credits: {
    crew: Crew[];
    cast: Cast[];
  };
}

type Array = {
  name: string;
};

export async function getNowPlayingMovies() {
  const { data } = await axios.get<MovieResponse>(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}`,
      },
    }
  );

  return data.results;
}

export async function getSingleMovie(movieId: number) {
  const { data } = await axios.get<SingleMovie>(
    `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}`,
      },
    }
    );
    console.log(data)

  return data;
}
