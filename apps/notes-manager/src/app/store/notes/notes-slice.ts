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
    addNote: (state, action: PayloadAction<Note>) => {
      state.notesList.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload
      );
    },
  }
});

export const { setNotesList, addNote, deleteNote } = notesSlice.actions;
export const selectNotesList = (state: RootState) => state.notes.notesList;
export const noteReducer = notesSlice.reducer;