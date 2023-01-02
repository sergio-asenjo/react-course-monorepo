import { useEffect, useState, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import './navigation.styles.scss';

import Crown from '../../../assets/crown.svg';
import NavLink from '../../components/nav-link/nav-link.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutAuthUser } from '../../../utils/firebase/firebase.utils';

export interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const [active, setActive] = useState('/');
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
        { isCartOpen && <CartDropdown /> }
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
