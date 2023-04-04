import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectNotesList } from '../../store/notes/notes-slice';

import './note-detail.styles.scss';

interface NoteDetailProps {}

const NoteDetail: FC<NoteDetailProps> = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const note = useSelector(selectNotesList).find((note) => note.id === parseInt(noteId!));
  const date = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <div className="note-detail flex col">
      <h1>Note Detail</h1>

      <div className="note-detail__content flex col">
        <header>
          <h2 className="note-detail__title">{note?.title}</h2>
          <p className="note-detail__subtitle">{date.format(new Date(note!.created_at))}</p>
        </header>
        <section>
          <p className="note-detail__description">{note?.content}</p>
        </section>
      </div>
    </div>
  )
}

export default NoteDetail;