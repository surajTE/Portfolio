import { Route, Routes } from 'react-router-dom';
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
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
