import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation.js';
import AnimatedCursor from 'react-animated-cursor';

class App extends Component {
  render() {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const shouldUseCursor = hasFinePointer && !prefersReducedMotion;

    return (
      <div>
        <Navigation />
        {shouldUseCursor && <AnimatedCursor color="234,113,134" />}
      </div>
    );
  }
}

export default App;
