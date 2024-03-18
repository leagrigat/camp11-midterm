import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PropsWithChildren, ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  checkAuthContext as AuthContext,
  ContextType as AuthContextType,
} from '../context/CheckAuthProvider';

const queryClient = new QueryClient();

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  auth?: Partial<AuthContextType>;
}
const customRender = (
  ui: ReactElement,
  { route = '/', ...options }: CustomRenderOptions = {}
): RenderResult & { auth: AuthContextType } => {
  const auth = {
    isAuthLoading: false,
    userIsLoggedIn: false,
    setUserIsLoggedIn: vi.fn().mockResolvedValue(undefined),
    ...options?.auth,
  };
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={auth}>
        <BrowserRouter>{children}</BrowserRouter>
        <ToastContainer />
      </AuthContext.Provider>
    </QueryClientProvider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
    auth,
  };
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
