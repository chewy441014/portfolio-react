import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/universal.css';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
      <About/>
      <Work/>
      <Contact/>
      <Resume/>
      </main>
    </div>
  );
}

export default App;
