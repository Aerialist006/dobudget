//import React from 'react'

import Cards from "../components/Homepage/Cards";
import Hero from "../components/Homepage/Hero";
import ContactUs from "../components/Homepage/ContactUs";
import Testimonials from "../components/Homepage/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Cards />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
