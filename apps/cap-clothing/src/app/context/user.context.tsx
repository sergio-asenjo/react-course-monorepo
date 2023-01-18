import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { User } from '@firebase/auth';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

interface UserState {
  currentUser: User | null;
}

interface UserAction {
  type: 'SET_CURRENT_USER';
  payload: User | null;
}

const userReducer = (state: UserState, action: UserAction) => {
  console.debug('userReducer: action', action);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type} in userReducer.`);
  }
};

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, { currentUser: null });
  console.debug(currentUser);

  const setCurrentUser = (user: User | null) => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  };

  const value = {
    currentUser: currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.debug('UserProvider: onAuthStateChangedListener: user', user);
    });
  }, []);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
