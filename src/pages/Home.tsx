//import React from 'react'

import Cards from "../components/Homepage/Cards";
import Hero from "../components/Homepage/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Cards />
      <div className="px-6 lg:px-36 md:px-20">
        <div className="md:px-12 lg:px-24 md:py-12 p-8 md:h-96 h-[30rem] bg-gradient-to-br rounded-2xl from-stone-800 from-10%  via-emerald-700 via-70%  bg-emerald-400 flex gap-4 flex-col md:gap-10 md:flex-row md:justify-between">
          <div className="md:h-full flex md:items-center">
            <p className="font-bold md:text-3xl text-3xl lg:text-5xl text-neutral-100">
              Get in Touch with Us!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:h-full h-full rounded-xl md:p-8 p-4 bg-neutral-100">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
