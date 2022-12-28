import { User } from '@firebase/auth';
import { createContext, ReactNode, useState } from 'react';

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
