import './App.css';
import { News } from './presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetailNews } from './presentation/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="detail-news" element={<DetailNews />} />
      </Routes>
    </Router>
  );
}

export default App;
