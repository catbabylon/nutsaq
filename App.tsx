import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Releases } from './components/Releases';
import { Tour } from './components/Tour';
import { NeuralLyrist } from './components/NeuralLyrist';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-deep-void min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Releases />
        <NeuralLyrist />
        <Tour />
      </main>
      <Footer />
    </div>
  );
};

export default App;
