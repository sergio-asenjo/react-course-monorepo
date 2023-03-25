import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./notes/notes-slice";

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});


export { store };