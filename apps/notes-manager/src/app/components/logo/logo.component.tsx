import { FC } from 'react';
import logo from 'apps/notes-manager/src/assets/logo.png';

import './logo.styles.scss';

interface LogoProps {
  onClick?: () => void;
}

export const Logo: FC<LogoProps> = ({ onClick }: LogoProps) => {
  return (
    <div className="logo flex col" onClick={onClick}>
      <div className="logo__information flex row">
        <img src={logo} className="icon" alt="logo" />
        <p className="name">Notomatic</p>
      </div>
      <p className="logo__description">Manage your notes!</p>
    </div>
  )
}

export default Logo;