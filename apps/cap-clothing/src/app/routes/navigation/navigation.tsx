import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Crown from '../../../assets/crown.svg';
import NavLink from '../../components/nav-link/nav-link.component';

import './navigation.styles.scss';

export interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [active, setActive] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  },)
  

  const links = [
    { id: 1, to: '/', description: 'Home' },
    { id: 2, to: '/shop', description: 'Shop' },
    { id: 3, to: '/authentication', description: 'Sign In' },
  ];

  return (
    <>
      <nav className="nav-container flex-row">
        <Link to="/">
          <img src={Crown} alt="hats" className="logo" />
        </Link>
        <section className="nav-items flex-row">
          {links.map((link) => (
            <NavLink 
              key={link.id}
              to={link.to}
              description={link.description}
              onclick={() => {setActive(link.to)}}
              active={active === link.to}
            />
          ))}
        </section>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
