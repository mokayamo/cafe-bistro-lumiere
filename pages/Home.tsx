import React from 'react';
import Hero from '../components/sections/Hero';
import AboutLite from '../components/sections/AboutLite';
import Menu from '../components/sections/Menu';
import Gallery from '../components/sections/Gallery';
import AboutDetail from '../components/sections/AboutDetail';
import Access from '../components/sections/Access';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutLite />
      <Menu />
      <AboutDetail />
      <Gallery />
      <Access />
    </div>
  );
};

export default Home;