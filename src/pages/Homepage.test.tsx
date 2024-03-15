import * as hooks from '../hooks/useGetMovies';
import { render, screen } from '../utils/testUtils';
import Homepage from './Homepage';
import { MockInstance } from 'vitest';

const getMoviesSpy = vi.spyOn(hooks, 'useGetMovies') as MockInstance;

describe('Homepage', () => {
  it('should render the component', () => {
    getMoviesSpy.mockReturnValue({
      movies: [
        {
          id: 123456,
          title: 'Test Movie',
          poster_path: 'test.jpg',
          adult: false,
          backdrop_path: '',
          genre_ids: [],
          original_language: '',
          original_title: '',
          overview: '',
          popularity: 0,
          release_date: '',
          video: false,
          vote_count: 0,
          movieId: 0,
          vote_average: 0,
          runtime: 0,
        },
      ],
      isLoading: false,
    });

    render(<Homepage />);
    expect(screen.getByText(/Upcoming Movies/i)).toBeVisible();
    const movieImage = screen.getByTestId('movie-image');
    expect(movieImage).toBeInTheDocument();
    expect(movieImage.closest('a')).toHaveAttribute('href', '/movies/123456');
  });

  it("should show loading spinner when it's loading", () => {
    getMoviesSpy.mockReturnValue({
      movies: [],
      isLoading: true,
    });
    render(<Homepage />);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeVisible();
  });
});
