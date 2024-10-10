//import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="relative h-72 md:h-[28rem] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/105532/pexels-photo-105532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className=" absolute w-full rounded-t-3xl inset-x-0 -bottom-1 object-bottom bg-white h-12 md:h-24"></div>
      </div>
      <div className="w-full bg-white h-auto lg:px-36 md:px-20 flex flex-col gap-10 justify-center items-center">
        <h2 className="lg:max-text-7xl md:text-6xl text-4xl px-10 text-center">
          Build the agency you’ve always wanted — without worrying about the
          money part.
        </h2>
        <h3 className="text-lg px-10 text-center">
          Bookkeeping & Accounting services for small and medium businesses
        </h3>
        <div className="flex gap-5">
          <button className="bg-emerald-400 p-3 rounded-lg font-semibold text-emerald-800 outline-emerald-400 outline outline-2">
            Know our Services
          </button>
          <button className="bg-white p-3 rounded-lg outline-stone-600 font-semibold outline outline-2 text-stone-900">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
