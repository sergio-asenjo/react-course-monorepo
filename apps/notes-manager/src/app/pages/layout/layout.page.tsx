import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FC, useEffect } from 'react';

import Header from '../../components/header/header.component';
import { NotesService } from '../../api/notes';
import { setNotesList } from '../../store/notes/notes-slice';

import './layout.styles.scss';

export const Layout: FC<{}> = () => {
  const dispatch = useDispatch();

  async function fetchNotes() {
    const notesList = await NotesService.fetchAll();
    dispatch(setNotesList(notesList));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout;