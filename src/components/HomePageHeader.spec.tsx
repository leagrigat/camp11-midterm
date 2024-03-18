import { render, waitFor, screen } from '@testing-library/react';
import HomePageHeader from './HomePageHeader';
import { http, server } from '../mocks/server';
import { HttpResponse } from 'msw';

test('should render the name and random avatar', async () => {
  render(<HomePageHeader />);
  await waitFor(() => {
    expect(screen.getByText(/Welcome John 👋/i)).toBeVisible();
    expect(screen.getByRole('img', { name: 'John' })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/random/?person'
    );
    expect(screen.getByText('Let’s relax and watch a movie!')).toBeVisible();
  });
});

test('should render the avatar if defined', async () => {
  const mockAvatar = 'https://test.com/avatar.png';

  server.use(
    http.get('http://localhost:8000/user', () => {
      return HttpResponse.json({
        firstName: 'Max',
        avatar: mockAvatar,
      });
    })
  );

  render(<HomePageHeader />);

  await waitFor(() => {
    expect(screen.getByRole('img', { name: 'Max' })).toHaveAttribute(
      'src',
      mockAvatar
    );
  });
});

test("handles error when fetching user's data", async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});

  server.use(
    http.get('http://localhost:8000/user', () => {
      return HttpResponse.error();
    })
  );

  render(<HomePageHeader />);

  await waitFor(() => {
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
