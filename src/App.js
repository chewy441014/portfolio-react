import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';

import './styles/universal.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route 
              path="/portfolio-react"
              element={<Home/>}
            />
            <Route 
              path="/portfolio-react/project/:id"
              element={<Project />}
            />        
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
