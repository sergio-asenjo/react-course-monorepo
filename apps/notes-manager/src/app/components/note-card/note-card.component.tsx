
import { FC } from 'react';
import { ReactComponent as TrashIcon } from '../../../assets/trash-outline.svg';

import './note-card.styles.scss';

interface NoteCardProps {
  title: string;
  subtitle: Date;
  content: string;

}

export const NoteCard: FC<NoteCardProps> = (
  { title, subtitle, content }: NoteCardProps
) => {
  const date = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(subtitle);

  return (
    <div className="card flex col">
      <header className="card__header flex row">
        <div className="flex col">
          <h2 className="card__title">{title}</h2>
          <p className="card__subtitle">{date}</p>
        </div>
        <TrashIcon className="card__icon" />
      </header>
      <main>
        <p className="card__content">{content}</p>
      </main>
    </div>
  )
}

export default NoteCard;