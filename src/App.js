import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Couple from './components/sections/Couple';
import Events from './components/sections/Events';
import People from './components/sections/People';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-content">
      <Home />
      <Header />
      <Couple />
      <Events />
      <People />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;