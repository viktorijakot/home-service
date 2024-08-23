import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useMemo } from 'react';

interface UserProviderProps {
  children: React.ReactNode;
}

interface User {
  email: string;
  password: string;
}

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const isLoggedIn = !!user;

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  const contextValue = useMemo(() => ({ user, login, logout, isLoggedIn }), [user, login, logout, isLoggedIn]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
