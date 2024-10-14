import { FaStar, FaStarHalf, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="px-6 lg:px-36 md:px-20 py-10 flex flex-col gap-4">
      <div className="flex w-full flex-col gap-1 items-center">
        <p className="uppercase font-medium text-neutral-400">Testimonials</p>
        <h2 className="font-bold md:text-3xl text-center w-2/3 text-3xl lg:text-5xl font-serif">
          Our Clients Trust Us
        </h2>
        <div className="uppercase flex flex-col items-center text-neutral-400">
          <p className="font-medium">Overall Rating</p>
          <div className="flex gap-1 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <div className="py-0  px-2 rounded-md font-medium bg-neutral-400 text-white">4.7</div>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div className="w-72 h-72 flex flex-col gap-2 p-2">
          <div className="h-1/5 flex items-end text-4xl text-emerald-200">
            <FaQuoteLeft />
          </div>
          <div className="h-3/5 flex items-center">
            Thanks to dobudget, our finances are managed with precision. Their
            expertise lets us focus on scaling, while they handle all the
            details. A perfect partner for tech businesses!
          </div>
          <div className="flex gap-2 h-1/5 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatar.iran.liara.run/public/13"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <p className=" font-medium">Mason Northwind</p>
              <p className="text-sm uppercase text-neutral-400 font-medium">
                CEO of Sumasy
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-72 flex flex-col gap-2 p-2">
          <div className="h-1/5 flex items-end text-4xl text-emerald-200">
            <FaQuoteLeft />
          </div>
          <div className="h-3/5 flex items-center">
            With dobudget, Cloudty’s financial management has never been easier.
            Their team handles everything with efficiency and precision, keeping
            us compliant and saving us time.
          </div>
          <div className="flex gap-2 h-1/5 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatar.iran.liara.run/public/100"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <p className=" font-medium">Sophia Solis-Saez</p>
              <p className="text-sm uppercase text-neutral-400 font-medium">
                CFO of Cloudty
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-72 flex flex-col gap-2 p-2">
          <div className="h-1/5 flex items-end text-4xl text-emerald-200">
            <FaQuoteLeft />
          </div>
          <div className="h-3/5 flex items-center">
            For Agmine, dobudget has provided invaluable financial insights.
            They truly understand agriculture’s unique demands. Highly recommend
            them without any doubting!
          </div>
          <div className="flex gap-2 h-1/5 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatar.iran.liara.run/public/47"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <p className=" font-medium">John Yeith</p>
              <p className="text-sm uppercase text-neutral-400 font-medium">
                CEO of Agmine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
