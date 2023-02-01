import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './navigation.styles.scss';

import Crown from '../../../assets/crown.svg';
import NavLink from '../../components/nav-link/nav-link.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/reducers/cart/cart.selector';
import { selectCurrentUser } from '../../store/reducers/user/user.selector';
import { signOutAuthUser } from '../../../utils/firebase/firebase.utils';
import { AppState } from '../../store/app-state.interface';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const currentUser = useSelector<AppState>(selectCurrentUser);
  const [active, setActive] = useState('/');
  const location = useLocation();
  const isCartOpen = useSelector<AppState>(selectIsCartOpen);
  const links = [
    { id: 1, to: '/', description: 'Home' },
    { id: 2, to: '/shop', description: 'Shop' },
    { id: 3, to: '/authentication', description: 'Sign In' },
  ];

  useEffect(() => {
    setActive(location.pathname);
  },)

  return (
    <>
      <nav className="nav-container flex-row">
        <Link to="/">
          <img src={Crown} alt="hats" className="logo" />
        </Link>
        <section className="nav-items flex-row">
          {links.map((link) => 
            {if (link.to === '/authentication' && currentUser) {
              return (
                <NavLink 
                  key={link.id}
                  to="/authentication"
                  description="Sign Out"
                  onclick={signOutAuthUser}
                  active={false}
                />
              );
            } else {
              return (
                <NavLink 
                  key={link.id}
                  to={link.to}
                  description={link.description}
                  onclick={() => {setActive(link.to)}}
                  active={active === link.to}
                />
              );
            }}
          )}
          <CartIcon></CartIcon>
        </section>
        { (isCartOpen as boolean) && <CartDropdown /> }
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
