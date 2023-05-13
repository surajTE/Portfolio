import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
