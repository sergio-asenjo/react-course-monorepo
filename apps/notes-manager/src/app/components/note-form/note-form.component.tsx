import { FC, useState } from 'react';

import Input from '../input/input.component';
import Button from '../button/button.component';
import { ReactComponent as EditIcon } from '../../../assets/create-outline.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/trash-outline.svg';

import './note-form.styles.scss';
import FieldError from '../field-error/field-error.component';

interface NoteFormProps {
  type: 'new' | 'edit';
  onClickEdit: () => void;
  onClickDelete: () => void;
  onSubmit: (formValues: FormValues, isValid: boolean) => void;
};

export interface FormValues {
  title: string;
  content: string;
};

function validateField(name: string, value: string, maxLength: number) {
  if (value.length > maxLength) {
    return `${name} must be less than ${maxLength} characters`;
  } else {
    return '';
  }
};

const NoteForm: FC<NoteFormProps> = ({
  type, onClickEdit, onClickDelete, onSubmit
}: NoteFormProps) => {
  const [ formValues, setFormValues ] = useState<FormValues>({
    title: '',
    content: ''
  });
  const [ formErrors, setFormErrors ] = useState<FormValues>({
    title: '',
    content: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const error = validateField(name, value, name === 'title' ? 20 : 200);

    setFormErrors({ ...formErrors, [name]: error });

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="form flex col">
      <header className="form__header flex row">
        <h2 className="title">
          {type === 'new' ? 'Create Note' : 'Edit Note'}
        </h2>
        {
          type === 'edit' &&
          <section className="action flex row">
            <EditIcon className="action__edit" onClick={onClickEdit} />
            <DeleteIcon className="action__delete" onClick={onClickDelete} />
          </section>
        }
      </header>
      <main className="form__main flex col">
        <section className="flex col">
          <Input label="Title" onChange={handleFormChange} type="text" name="title" />
          {
            formErrors.title &&
            <FieldError error={'Title must be less than 20 characters'} />
          }
        </section>
        <section className="flex col">
          <Input label="Content" onChange={handleFormChange} type="textarea" name="content" />
          {
            formErrors.content &&
            <FieldError error={'Content must be less than 200 characters'} />
          }
        </section>
        <div className="form-button">
          <Button 
            type="button"
            color="primary"
            onClick={() => onSubmit(formValues, formErrors.title.length > 0 || formErrors.content.length > 0)}
            disabled={ formErrors.title.length > 0 || formErrors.content.length > 0 }
          >
            Save Note
          </Button>
        </div>
      </main>
    </form>
  )
}

export default NoteForm;