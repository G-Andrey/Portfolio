import React from 'react';

import { About, Skills, Projects, Resume } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
    </div>
  )
};

export default App;
