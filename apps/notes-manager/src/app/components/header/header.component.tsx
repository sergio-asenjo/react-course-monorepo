import { FC } from 'react';

import './header.styles.scss';

export const Header: FC<{}> = () => {
  return (
    <header className="header">
      <h1>Notes Manager</h1>
    </header>
  )
}

export default Header;