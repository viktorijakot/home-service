import useLocalStorage from "@/hooks/useLocalStorage";
import { LoginResponse, User } from "@/types/user";
import { createContext, useMemo } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const login = (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const contextValue = useMemo(() => ({ user, login, logout, isLoggedIn }), [user, login, logout, isLoggedIn]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
