import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../api/notes";

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

export const noteReducer = notesSlice.reducer;
export const { setNotesList } = notesSlice.actions;