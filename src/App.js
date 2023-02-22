import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { MyProjects } from './components/MyProjects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';

function App() {

  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <MyProjects />
      <Technologies />
      <Contact />
    </div>
  );
}

export { App };
