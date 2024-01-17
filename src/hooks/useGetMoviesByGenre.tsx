import { useQuery } from '@tanstack/react-query';
import { getNowPlayingByGenre } from '../api/movies';
import { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';

type Genre = {
  genre: string;
  emoji: string;
  id: number;
  isSelected: boolean;
};

function getSelectedIDs(genreList: Genre[]) {
  const selectedGenreIDs: number[] = [];
  for (let genre of genreList) {
    if (genre.isSelected) {
      selectedGenreIDs.push(genre.id);
    }
  }
  return selectedGenreIDs;
}

export function useGetMoviesByGenre() {
  const { genres } = useContext(GenreContext);
  const selectedGenreIDs = getSelectedIDs(genres);
  console.log(selectedGenreIDs.join('|'));
  const { data: movies, ...rest } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => await getNowPlayingByGenre(selectedGenreIDs.join('|')),
  });
  return { movies, ...rest };
}
