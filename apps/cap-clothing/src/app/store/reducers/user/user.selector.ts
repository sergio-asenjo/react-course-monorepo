import { AppState } from './../../app-state.interface';

export const selectCurrentUser = (state: AppState) => state.user.currentUser;