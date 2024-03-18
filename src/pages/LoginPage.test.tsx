import { fireEvent, render, screen, waitFor } from '../utils/testUtils';
import LoginPage from './LoginPage';

const getLoginButton = () => screen.getByRole('button', { name: /login/i });
const getEmailInput = () => screen.getByTestId('email');
const getPasswordInput = () => screen.getByTestId('password');

test('renders the Login page', () => {
  render(<LoginPage />);
  expect(screen.getByText(/Welcome to Cine-Scape/i)).toBeVisible();
  expect(
    screen.getByText(
      /You need to log in to be able to make reservations and add movies to your watchlist./i
    )
  ).toBeVisible();
  expect(getEmailInput()).toBeVisible();
  expect(getPasswordInput()).toBeVisible();
  expect(getLoginButton()).toBeVisible();
});

test('display validation errors', async () => {
  render(<LoginPage />);
  getLoginButton().click();

  // Expect 2 validation errors
  await waitFor(() => {
    expect(screen.queryAllByTestId('input-error-message')).toHaveLength(2);
  });

  expect(screen.getByText(/Please specify a valid email!/i)).toBeVisible();
  expect(
    screen.getByText(/Minimum password length is 7 characters!/i)
  ).toBeVisible();

  const passwordInput = getPasswordInput();

  // Type invalid password (missing upper case letter)
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  await waitFor(() => {
    expect(
      screen.getByText(/Password must contain at least one upper case letter!/i)
    ).toBeVisible();
  });

  // Type invalid password (missing special character)
  fireEvent.change(passwordInput, { target: { value: 'Password' } });
  await waitFor(() => {
    expect(
      screen.getByText(/Password must contain at least one special character!/i)
    ).toBeVisible();
  });

  // Type valid email & password
  fireEvent.change(getEmailInput(), { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: 'Password1!' } });

  // Expect no validation errors
  await waitFor(() => {
    expect(screen.queryAllByTestId('input-error-message')).toHaveLength(0);
  });
});

test.todo('redirects to registration page');
test.todo('submits the form');
test.todo('displays authentication error message when login fails');
