import React from "react";
import heroBg from "../assets/hero-bg.png";
import Button from "../components/ui/Button";
const HeroSection = () => {
  return (
    <section
      style={{ background: `url(${heroBg}) no-repeat center/cover` }}
      className=" h-screen absolute w-screen top-0 pt-20"
    >
      <div className="w-5xl mx-auto">
        <h1 className="text-8xl mt-[144px] text-yellow-main">
          HAIRCUT <br /> &SHAVE
        </h1>
        <h2 className="text-5xl mt-10 text-white">
          LOOK YOUR <br /> BEST
        </h2>
        <Button className="bg-yellow-main px-9 py-3 mt-10">BOOK NOW</Button>
        <div className="mt-40">
          <h3
            className="text-6xl text-yellow-main
            mt-[40px ] mb-20 text-center font-bold"
          >
            CHECK OUT SERVICES
          </h3>
          <nav className="flex justify-between items-center">
            <ul>
              <li className="text-3xl text-black mb-4">Basic Haircut</li>
              <li className="text-3xl text-black mb-4">Beard Trims</li>
              <li className="text-3xl text-black mb-4">Haircut + Beard</li>
              <li className="text-3xl text-black mb-4">Shave + Hot Towel </li>
              <li className="text-3xl text-black mb-4">Kids Haircut</li>
            </ul>
            <ul>
              <li className="text-3xl text-black mb-4">$15</li>
              <li className="text-3xl text-black mb-4">$10</li>
              <li className="text-3xl text-black mb-4">$22</li>
              <li className="text-3xl text-black mb-4">$18</li>
              <li className="text-3xl text-black mb-4">$12</li>
            </ul>
          </nav>
        </div>
        <h3 className="text-6xl text-yellow-main mt-20 mb-20 text-center font-bold">
          About US
        </h3>
        <div>
          <ul className="mt-20 grow flex justify-between items-start">
            <li className="text-2xl text-yellow-main mb-4">
              <h4>Address</h4>
              <p className="text-black mt-4">
                {" "}
                123 Barber Street, <br /> Hair City,
                <br /> HC 12345
              </p>
            </li>
            <li className="text-2xl text-yellow-main mb-4">
              <h4 className="mb-4">Contact</h4>
              <a href="tel:+1234567890" className="text-black">
                +1 234 567 890
              </a>
            </li>
            <li className="text-2xl text-yellow-main mb-4">
              <h4 className="mb-4">Working Hours</h4>
              <p className="text-black">
                Mon-Fri: 9 AM - 8 PM
                <br />
                Sat-Sun: 10 AM - 6 PM
              </p>
            </li>
            <li className="text-2xl text-yellow-main mb-4">
              <h4 className="mb-4">Follow Us</h4>
              <ul>
                <li>
                  <a href="http://facebook.com" className="text-black">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com" className="text-black">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com" className="text-black">
                    Twitter
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
