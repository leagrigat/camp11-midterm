import MovieImage from '../components/MovieImage';
import HomePageHeader from '../components/HomePageHeader';
import Input from '../components/Input';
import { IoSearch } from 'react-icons/io5';
import GenreComponent from '../components/GenreComponent';
import { useGetMovies } from '../hooks/useGetMovies';
import LoadingSpinner from '../components/LoadingSpinner';
import { Combobox, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Movie } from '../api/movies';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const { movies, isLoading, isError, error } = useGetMovies();
  const [selected, setSelected] = useState<Movie | null>(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  console.log({ selected, query });

  useEffect(() => {
    if (selected) {
      navigate(`/movies/${selected}`);
    }
  }, [selected]);

  const filteredMovies =
    query === ''
      ? movies
      : movies!.filter(movie =>
          movie.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query?.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <>
      <div className="flex flex-col gap-6">
        <HomePageHeader
          name="Johannes"
          avatarImg="https://source.unsplash.com/random/?person"
        />
        <div className="text-sm">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative">
              <Combobox.Input
                autoComplete="off"
                displayValue={(movie: Movie) => movie?.title}
                as={Input}
                onChange={event => setQuery(event.target.value)}
                isRounded={true}
                icon={<IoSearch className="h-6 w-6 cursor-pointer" />}
                placeholder={'Search'}
                id={'search'}
              />
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white-heavy py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredMovies?.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-white">
                      Nothing found.
                    </div>
                  ) : (
                    filteredMovies?.map(movie => (
                      <Combobox.Option
                        key={movie.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-[#FFB43A] text-black'
                              : 'text-white opacity-60'
                          }`
                        }
                        value={movie.id}
                      >
                        {({ selected }) => (
                          <>
                            {
                              <span
                                className={`block truncate ${
                                  selected ? 'font-extrabold' : 'font-medium'
                                }`}
                              >
                                {movie.title}
                              </span>
                            }
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <GenreComponent />
        <div>
          <h2 className="text-white text-base font-bold mb-[16px]">
            Upcoming Movies
          </h2>
          <div className="overflow-scroll snap-x -mx-5">
            <div className="flex gap-x-9 items-center">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                movies?.map(movie => (
                  <MovieImage
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
