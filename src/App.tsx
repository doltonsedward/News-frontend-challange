import './App.css';
import { Home } from './presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
