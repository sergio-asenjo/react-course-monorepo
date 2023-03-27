import { FC } from 'react';
import { useSelector } from 'react-redux';

import NoteCard from '../note-card/note-card.component';
import { selectNotesList } from '../../store/notes/notes-slice';

import './note-browser.styles.scss';

export const NoteBrowser: FC<{}> = () => {
  const notesSelect = useSelector(selectNotesList);

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
          />
        )
      }
    </div>
  );
};

export default NoteBrowser;
