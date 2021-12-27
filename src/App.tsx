import './App.css';
import { News } from './presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
