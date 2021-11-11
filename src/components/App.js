// React dependencies
import React from 'react';

// My own modules
import Footer from './Footer';
import MainContent from './MainContent';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Nav />
      <MainContent />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
