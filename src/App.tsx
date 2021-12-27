import './App.css';
import { News } from './presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetailNews, NotMatch } from './presentation/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="detail-news" element={<DetailNews />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
