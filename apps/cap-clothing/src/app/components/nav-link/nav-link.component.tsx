import { Link } from 'react-router-dom';

import './nav-link.styles.scss';

export interface NavLinkProps {
  to: string;
  description: string;
  active: boolean;
  onclick: () => void;
}

const NavLink = ({ to, description, onclick, active }: NavLinkProps) => {
  return (
    <Link to={to} 
      className={
        `nav__link nav__link--underline ${active ? 'nav__link--active' : ''}`
      }
      onClick={onclick}>
      {description}
    </Link>
  );
};

export default NavLink;
