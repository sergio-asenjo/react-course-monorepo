import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';

import './header.styles.scss';

export const Header: FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <header className="header flex row">
      <Logo onClick={() => navigate('/')} />
      <Button
        onClick={() => navigate('/note/new')}
        type="button"
        color="primary"
      >
        Add Note +
      </Button>
    </header>
  );
};

export default Header;
