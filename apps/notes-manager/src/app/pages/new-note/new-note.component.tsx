import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { NotesService } from '../../api/notes';
import NoteForm, { FormValues } from '../../components/note-form/note-form.component';
import { addNote } from '../../store/notes/notes-slice';

import './new-note.styles.scss';

interface NewNoteProps { }

const NewNote: FC<NewNoteProps> = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async (formValues: FormValues, isValid: boolean) => {
    if (isValid) return;
    const newNote = await NotesService.create({
      id: 0,
      created_at: new Date().toISOString(),
      ...formValues
    });
    if (newNote) {
      dispatch(addNote(newNote));
      alert('Note created successfully.');
    }
  }

  return (
    <div className="new-note flex col">
      <h1>Note Editor</h1>
      <NoteForm
        type="new"
        onClickEdit={() => console.log('edit')}
        onClickDelete={() => console.log('delete')}
        onSubmit={
          (formValues: FormValues, isValid: boolean) => handleFormSubmit(formValues, isValid)
        }
      />
    </div>
  )
}

export default NewNote;