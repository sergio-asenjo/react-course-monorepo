
import { FC } from 'react';
import { ReactComponent as TrashIcon } from '../../../assets/trash-outline.svg';

import './note-card.styles.scss';

interface NoteCardProps {
  title: string;
  subtitle: Date;
  content: string;
  onClickCard?: () => void;
  onClickDelete?: () => void;
}

export const NoteCard: FC<NoteCardProps> = (
  { title, subtitle, content, onClickCard, onClickDelete }: NoteCardProps
) => {
  const date = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(subtitle);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClickDelete && onClickDelete();
  }

  return (
    <div className="card flex col" onClick={onClickCard}>
      <header className="card__header flex row">
        <div className="flex col">
          <h2 className="card__title">{title}</h2>
          <p className="card__subtitle">{date}</p>
        </div>
        <TrashIcon className="card__icon" onClick={handleDelete} />
      </header>
      <main>
        <p className="card__content">{content}</p>
      </main>
    </div>
  )
}

export default NoteCard;