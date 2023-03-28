import { FC } from 'react';
import { useSelector } from 'react-redux';

import NoteCard from '../note-card/note-card.component';
import { selectNotesList } from '../../store/notes/notes-slice';

import './note-browser.styles.scss';
import { useNavigate } from 'react-router-dom';

export const NoteBrowser: FC<{}> = () => {
  const notesSelect = useSelector(selectNotesList);
  const navigate = useNavigate();

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
            onClickDelete={() => console.debug('delete')}
          />
        )
      }
    </div>
  );
};

export default NoteBrowser;
