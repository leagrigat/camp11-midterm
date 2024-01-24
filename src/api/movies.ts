import axios from 'axios';
import { format, add } from 'date-fns';

const today = new Date();
const maxDate = format(add(today, { days: 7 }), 'yyyy-MM-dd');
const minDate = format(add(today, { days: -35 }), 'yyyy-MM-dd');

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

// brauchen wir den type wirklich oder können wir einfach type Movie behalten?
type MovieResponse = {
  results: Movie[];
};

type AdvMovieResponse = {
  results: Movie[];
  page: number;
  total_pages: number;
};

export interface SingleMovie extends Movie {
  genres: Array[];
  credits: {
    crew: Crew[];
  };
}

type Array = {
  name: string;
};

export async function getNowPlayingMovies() {
  const { data } = await axios.get<MovieResponse>(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}`,
      },
    }
  );

  return data.results;
}

export async function getNowPlayingByGenre(pageParam = 1, genres: string) {
  const { data } = await axios.get<AdvMovieResponse>(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}&with_genres=${genres}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}`,
      },
    }
  );
  return data;
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

  return data;
}

export async function getMovies(pageParam = 0, genres: string) {
  const { data } = await axios.get<MovieResponse>(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}&with_genres=${genres}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIES_SECRET}`,
      },
    }
  );

  return data;
}
