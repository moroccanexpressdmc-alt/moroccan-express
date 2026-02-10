
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AIPlanner from './components/AIPlanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AIPlanner />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
