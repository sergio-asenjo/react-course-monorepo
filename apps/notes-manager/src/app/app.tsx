import './app.styles.scss';

import { Route, Routes } from 'react-router-dom';
import NoteBrowser from './components/note-browser/note-browser.component';
import Layout from './pages/layout/layout.page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<NoteBrowser />} />
      </Route>
    </Routes>
  );
}

export default App;
