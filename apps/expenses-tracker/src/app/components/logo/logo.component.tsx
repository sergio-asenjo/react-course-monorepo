import { FC } from 'react';

import './logo.styles.scss';

export interface LogoProps {
  image: string;
  title: string;
  subtitle: string;
};

export const Logo: FC<LogoProps> = ({ image, title, subtitle }) => {
  return (
    <>
      <div className="container">
        {image && <img className="img" src={image} alt="logo" />}
        <h1 className="title">{title}</h1>
      </div>
      <h2 className="subtitle">{subtitle}</h2>
    </>
  )
}

export default Logo;