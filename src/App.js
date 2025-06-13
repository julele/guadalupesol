import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Couple from './components/sections/Couple';
import Events from './components/sections/Events';
import People from './components/sections/People';
// import Gallery from './components/sections/Gallery';
// import RSVP from './components/sections/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-content">
      <Home />
      <Header />
      <Couple />
      <Events />
      <People />
      {/* <Gallery /> */}
      {/* <RSVP /> */}
      <Footer />
    </div>
  );
}

export default App;