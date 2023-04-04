import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NoteCard from '../note-card/note-card.component';
import { NotesService } from '../../api/notes';
import { deleteNote, selectNotesList } from '../../store/notes/notes-slice';

import './note-browser.styles.scss';

export const NoteBrowser: FC<{}> = () => {
  const dispatch = useDispatch();
  const notesSelect = useSelector(selectNotesList);
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    const response = await NotesService.deleteById(id);
    dispatch(deleteNote(id));
  }

  return (
    <div className="browser flex col">
      <h1>Note Browser</h1>
      {
        notesSelect.map(note =>
          <NoteCard
            key={note.id}
            title={note.title}
            subtitle={new Date(note.created_at)}
            content={note.content}
            onClickCard={() => navigate(`/note/${note.id}`)}
            onClickDelete={() => handleDelete(note.id!)}
          />
        )
      }
    </div>
  );
};

export default NoteBrowser;
