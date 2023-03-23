import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

import './layout.styles.scss';

export const Layout: FC<{}> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout;