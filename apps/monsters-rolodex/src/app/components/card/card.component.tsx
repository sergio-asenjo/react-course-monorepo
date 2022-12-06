import { IMonster } from '@interfaces/IMonster';
import './card.styles.scss';

interface IProps {
  monster: IMonster;
}

const Card = ({ monster }: IProps) => {
  return (
    <div className="card">
      <div className="header">
        <img
          alt="monster"
          src={`https://avatars.dicebear.com/api/bottts/${monster.id}.svg`}
        />
      </div>
      <div className="content">
        <h1 className="name">{monster.name}</h1>
        <p className="email">{monster.email}</p>
      </div>
    </div>
  );
};

export default Card;
