import { User } from '@firebase/auth';
import { createContext, ReactNode, useState, useEffect } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';

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

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.debug('UserProvider: onAuthStateChangedListener: user', user);
    });
  }, []);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
