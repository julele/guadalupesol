import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Couple from './components/sections/Couple';
import Events from './components/sections/Events';
import People from './components/sections/People';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/Footer';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import WhatsappAccess from './components/WhatsappAccess';

function App() {
  return (
    <Router>
      <div className="page-content">
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Header />
              <Couple />
              <Events />
              <People />
              <Newsletter />
              <Footer />
            </>
          } />
          <Route path="/suscribirme" element={<NewsletterSubscribe />} />
          <Route path="/acceso-grupo" element={<WhatsappAccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;