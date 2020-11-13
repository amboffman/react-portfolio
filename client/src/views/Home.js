import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
    <Hero />
    <Intro />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;