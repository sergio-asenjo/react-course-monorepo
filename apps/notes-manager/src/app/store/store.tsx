import { configureStore } from "@reduxjs/toolkit";
import { noteReducer, notesSlice } from "./notes/notes-slice";

export interface RootState {
  notes: ReturnType<typeof notesSlice.reducer>;
}

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});


export { store };