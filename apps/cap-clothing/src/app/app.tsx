import { Route, Routes, Link } from 'react-router-dom';

import CategoryBox from './components/category-box/category-box.component';

import './app.styles.scss';

export function App() {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div className="container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryBox title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  )
}

export default App;
