import React from "react";
import appIcon from "../assets/cute-octopus-cartoon.png";
import { BsStars } from "react-icons/bs"; //for the generate button
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* 1st part */}
      <div className="sm:mt-24 lg:mt-24 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img src={appIcon} alt="image" className="w-[300px] h-[180px]" />
          <span className="text-3xl font-bold">Text2Canvas</span>
        </div>
        <div className="mt-7 text-xl lg:text-3xl font-semibold flex flex-col gap-2 justify-center items-center">
          <span>AI Art Image and Video Generator</span>
          <span>What will you create?</span>
        </div>
        {/* button  */}
        <button className="text-xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 px-20 rounded mt-7 hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
          <div className="flex gap-1 items-center">
            <BsStars />
            Generate
          </div>
        </button>
      </div>

      {/* 2nd part  */}
      <div className="flex flex-col lg:flex-row justify-around items-center gap-4 mt-11 mb-11 px-2">
        <div className="flex flex-col gap-3 mt-11">
          <img
            src={image1}
            alt=""
            className="w-[300px] h-[162px] md:w-[400px] md:h-[216px]"
          />
          <img
            src={image3}
            alt=""
            className="w-[300px] h-[186px] md:w-[400px] md:h-[247px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <span>Bring your ideas to life</span>
          <span>
            Transform a few words into stunning AI generated art and photos.
          </span>
          <button className="text-xl w-[300px] bg-customButton2 text-white font-bold py-3 px-20 rounded mt-7 hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <div className="flex gap-1 items-center">
              <BsStars />
              Get Started
            </div>
          </button>
        </div>
      </div>

      {/* 3rd part */}
      <div className="bg-customBG flex flex-col lg:flex-row justify-around gap-4 items-center px-2">
        <img
          src={image5}
          alt=""
          className="w-[300px] h-[378px] md:w-[500px] md:h-[631px]"
        />
        <div className="flex flex-col gap-3 text-black items-center justify-center">
          <span className="text-2xl font-bold">Fuel your imagination</span>
          <span>Have writer’s block? Gencraft can help with that too.</span>
          <span>
            Visualize new ideas by adding keywords that inspire you, then watch
            your words come to life.
          </span>
          <button className="text-lg bg-customButton2 text-white font-bold py-3 px-20 rounded mt-7 w-[300px] hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <div className="flex gap-1 items-center">
              <BsStars />
              Get Inspired
            </div>
          </button>
        </div>
      </div>

      {/* 4th part  */}
      <div className="bg-customBG flex flex-col-reverse lg:flex-row justify-around gap-4 items-center px-2 pb-11">
        <div className="flex flex-col gap-3 text-black items-center justify-center">
          <span className="text-2xl font-bold">
            Showcase your creative brand
          </span>
          <span>
            Find your voice and create content that truly represents you.
          </span>
          <span>Download your creations and share them with the world.</span>
          <button className="text-lg bg-customButton2 text-white font-bold py-3 px-20 rounded mt-7 w-[320px] hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <div className="flex gap-1 items-center">
              <BsStars />
              Start Creating
            </div>
          </button>
        </div>
        <img
          src={image6}
          alt=""
          className="w-[300px] h-[378px] md:w-[500px] md:h-[631px]"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
