import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router';
import { UserProvider } from './context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
