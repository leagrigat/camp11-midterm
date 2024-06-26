import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_SERVER_URL}/user`, () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
      avatar: null,
    });
  }),
];
