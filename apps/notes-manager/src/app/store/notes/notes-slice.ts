import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../api/notes";
import { RootState } from "../store";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [] as Note[],
  },
  reducers: {
    setNotesList: (state, action: PayloadAction<Note[]>) => {
      state.notesList = action.payload;
    },
  }
});

export const { setNotesList } = notesSlice.actions;
export const selectNotesList = (state: RootState) => state.notes.notesList;
export const noteReducer = notesSlice.reducer;