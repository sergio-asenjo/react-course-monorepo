import { User } from "firebase/auth";

interface UserState {
  currentUser: User | null;
}

interface UserAction {
  type: 'SET_CURRENT_USER';
  payload: User | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  console.debug('userReducer: action', action);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};