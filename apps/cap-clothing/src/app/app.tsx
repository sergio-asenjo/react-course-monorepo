import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';

import './app.styles.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;
