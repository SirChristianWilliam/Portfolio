import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <Router>
      <div>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('about')}>About</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
