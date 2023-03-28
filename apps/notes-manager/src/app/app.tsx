import { Route, Routes } from 'react-router-dom';

import Layout from './pages/layout/layout.page';
import NewNote from './pages/new-note/new-note.component';
import NoteBrowser from './components/note-browser/note-browser.component';

import './app.styles.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<NoteBrowser />} />
        <Route path="/note/new" element={<NewNote />} />
      </Route>
    </Routes>
  );
}

export default App;
