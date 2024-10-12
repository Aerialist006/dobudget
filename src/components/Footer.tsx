import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="relative h-auto md:h-[33rem] w-full bg-cover bg-center flex flex-col justify-center bg-gradient-to-b from-emerald-900 via-emerald-950 to-stone-950">
        <div className=" absolute w-full rounded-b-2xl inset-x-0 -top-0 object-bottom bg-white h-12 md:h-24" />
        <div className="pt-12 md:pt-24 h-auto">
          <div className=" px-6 lg:px-36 md:px-20 text-gray-200 grid grid-rows-3 grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 gap-10 h-full py-10">
            <div className="flex flex-col justify-center gap-4 md:gap-8">
              <div className="flex gap-2 items-center">
                <p className="text-8xl">
                  <PiCurrencyCircleDollarBold />
                </p>
                <div className="flex flex-col leading-5">
                  <p className="font-serif tracking-wide font-bold text-5xl">
                    dobudget
                  </p>
                  <p className="text-lg">Bookkeeping Services</p>
                </div>
              </div>

              <div className="text-2xl flex gap-2">
                <FaSquareTwitter />
                <FaSquareInstagram />
                <FaSquareFacebook />
                <FaLinkedin />
              </div>
              <div>9641 Brown Street Cumming, GA 30040</div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-3xl">Services</h2>
              <div>
                <ul>Service 1</ul>
                <ul>Service 1</ul>
                <ul>Service 1</ul>
                <ul>Service 1</ul>
                <ul>Service 1</ul>
                <ul>Service 1</ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:hidden lg:flex">
              <h2 className="font-serif text-3xl">Quick Links</h2>
              <div>
                <ul>Quick links</ul>
                <ul>Quick links</ul>
                <ul>Quick links</ul>
                <ul>Quick links</ul>
                <ul>Quick links</ul>
                <ul>Quick links</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
