import { ChartNoAxesCombined } from "lucide-react";

const Cards = () => {
  return (
    <div className="lg:px-36 h-[80vh] flex-col md:px-20 px-6 flex lg:gap-10 gap-4 md:flex-col lg:flex-row w-full md:h-[42rem] md:max-h-[45rem] lg:h-[32rem] ">
      <div className="md:w-full flex lg:w-1/2 md:h-1/2 lg:h-full h-1/3 rounded-2xl px-12 items-lef justify-center md:py-20 bg-gradient-to-b from-emerald-400 to-emerald-600 text-stone-100 flex-col gap-3">
        <div className="hidden lg:block">
          <ChartNoAxesCombined  size={"6rem"} strokeWidth={2.3} />
        </div>
        <p className="font-bold font-serif text-4xl ">Accounting Management</p>
        <p className="font-medium hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repudiandae eius, illum laudantium sequi corporis quibusdam{" "}
        </p>
        <button className="bg-emerald-600 self-start p-3 rounded-lg font-semibold font-sans hover:bg-emerald-700 w-auto hover:text-emerald-200 transition-all text-emerald-200 ">
          Learn More
        </button>
      </div>
      <div className="w-full h-2/3 lg:w-1/2 flex flex-col md:flex-row lg:flex-col lg:gap-10 gap-4 md:h-1/2 lg:h-full">
        <div className="flex p-8 md:h-full h-1/2 lg:w-full w-full md:w-1/2 lg:h-1/2 bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(231,229,228,0.8),rgba(168,162,158,0.8)),url('https://images.pexels.com/photos/8145352/pexels-photo-8145352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-2xl items-center md:items-end hover:scale-[1.01] transition-all">
          <p className="font-bold text-3xl text-stone-100 font-serif">
            Financial Advice
          </p>
        </div>
        <div className="flex lg:flex-row lg:w-full md:w-1/2 h-1/2 md:h-full w-full md:flex-col lg:gap-10 gap-4 lg:h-1/2">
          <div className="flex p-8  lg:w-1/2 h-full md:h-1/2 w-1/2 lg:h-full md:w-full items-center md:items-end rounded-2xl bg-[linear-gradient(to_bottom,rgba(168,162,158,0.8),rgba(41,37,36,0.8)),url('https://images.pexels.com/photos/7679583/pexels-photo-7679583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] hover:scale-[1.01] bg-cover bg-center">
            <p className="font-bold text-2xl md:text-3xl text-stone-100 font-serif">
              Tax Reports
            </p>
          </div>
          <div className="flex p-8 lg:w-1/2 h-full md:h-1/2 w-1/2 lg:h-full md:w-full items-center md:items-end rounded-2xl  bg-[linear-gradient(to_bottom,rgba(168,162,158,0.8),rgba(41,37,36,0.8)),url('https://images.pexels.com/photos/8154930/pexels-photo-8154930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] hover:scale-[1.01] bg-cover">
            <p className="font-bold text-2xl md:text-3xl text-stone-100 font-serif">
              Legal Advice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
