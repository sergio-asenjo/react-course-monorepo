import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { NotesService } from '../../api/notes';
import NoteForm, { FormValues } from '../../components/note-form/note-form.component';
import { addNote } from '../../store/notes/notes-slice';

import './new-note.styles.scss';

interface NewNoteProps { }

const NewNote: FC<NewNoteProps> = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async (formValues: FormValues) => {
    const newNote = await NotesService.create({
      created_at: new Date().toISOString(),
      ...formValues
    });
    if (newNote) {
      dispatch(addNote(newNote));
    }
  }

  return (
    <div className="new-note flex col">
      <h1>Note Editor</h1>
      <NoteForm
        type="new"
        onClickEdit={() => console.log('edit')}
        onClickDelete={() => console.log('delete')}
        onSubmit={handleFormSubmit}
      />
    </div>
  )
}

export default NewNote;