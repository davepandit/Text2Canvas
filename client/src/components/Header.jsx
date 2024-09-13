import React, { useState } from "react";
import { BsStars } from "react-icons/bs"; //for the generate button
import { IoSearchOutline } from "react-icons/io5";
import { PiLightbulbFilamentThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="hidden xl:flex items-center justify-around mt-5">
        {/* left part */}
        <div className="flex items-center gap-11">
          <div className="font-bold text-2xl hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            Text2Canvas
          </div>
          <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <BsStars />
            Generate
          </div>
          <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <IoSearchOutline />
            Explore
          </div>
          <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <PiLightbulbFilamentThin />
            Products
          </div>
        </div>
        {/* right part  */}
        <div className="flex items-center gap-4">
          <button className="bg-customButton rounded-3xl px-5 py-[5px] hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            Login
          </button>
          {/* my twitter link and all */}
          <a
            href="https://github.com/davepandit/Text2Canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://x.com/Davepandit0812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
      {/* this is for the smaller screens */}
      <div className="xl:hidden flex items-center justify-evenly mt-5">
        <GiHamburger className="text-2xl" onClick={() => setShowModal(true)} />
        <div className="text-xl font-bold">Text2Canvas</div>
        <div className="flex items-center gap-5">
          {/* my twitter link and all */}
          <a
            href="https://github.com/davepandit/Text2Canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://x.com/Davepandit0812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
      {/* this is the modal that comes up when the burger is clicked */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          showModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white p-4 transition-transform duration-300 ${
            showModal ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevents the modal from closing when clicking inside
        >
          <div className="flex px-4 py-2 justify-around items-center">
            <button
              className="text-black text-3xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="text-xl font-bold text-black">Text2Convas</div>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/davepandit/Text2Canvas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-3xl text-black hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
                  <FaGithub />
                </span>
              </a>

              <a
                href="https://x.com/Davepandit0812"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-3xl text-black hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
                  <FaTwitter />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <hr class="border-t-2 border-gray-300 " />
            <div className="text-lg text-black flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              <BsStars />
              Generate
            </div>
            <hr class="border-t-2 border-gray-300 " />
            <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out text-black">
              <IoSearchOutline />
              Explore
            </div>
            <hr class="border-t-2 border-gray-300 " />
            <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out text-black">
              <PiLightbulbFilamentThin />
              Products
            </div>
            <hr class="border-t-2 border-gray-300 " />
            <div className="text-lg flex gap-1 items-center hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out text-black">
              <IoIosHelpCircleOutline />
              Help
            </div>
            <hr class="border-t-2 border-gray-300 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
