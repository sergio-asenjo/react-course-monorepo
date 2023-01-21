import { User } from "firebase/auth";
import { AnyAction } from "redux";

export const setCurrentUser = (user: User | null): AnyAction => {
  return ({ type: 'SET_CURRENT_USER', payload: user });
};