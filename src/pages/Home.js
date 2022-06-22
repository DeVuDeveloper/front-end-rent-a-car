import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Hamburger from '../components/navigation/Hamburger';
import CarsCarousel from '../components/cars/CarsCarousel';

const Home = () => (
  <div className="homepage">
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
        {/* Mobile */}
        <Hamburger />
        <div className="flex flex-col items-center w-screen lg:mt-14 lg:pr-44">
          <h1 className="text-3xl text-slate-900 uppercase font-bold text-center">LATEST MODELS</h1>
          <p className="text-gray-500 mt-1 text-lg">Please select a Car Model</p>
        </div>
        <div className="bg-green-10 flex flex-col items-center">
          <CarsCarousel />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
