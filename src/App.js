import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


/*  
import { Route, Routes, BrowserRouter } from 'react-router-dom';
<Routes>
        <Route path="/" exact element={<Home />} />
</Routes>
import { Link } from 'react-router-dom';
<Link to="/contact">İletişim</Link>
<Link to="/menu">
          <button>SİPARİŞ VER</button>
</Link>
*/