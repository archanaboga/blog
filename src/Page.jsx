import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  BsFillHouseDoorFill,
  BsFillChatLeftTextFill,
  BsFillBookmarkPlusFill,
  BsFillEnvelopeFill,
  BsBoxArrowInRight,
  BsGeoAlt,
} from "react-icons/bs";
import { pic } from "./constants";
import App from "./App";

const page = () => {
  return (
    <div className=" drop-shadow-2xl flex">
      <div className="h-screen bg-pink-600 p-5 pt-8 w-72 relative">
        <FiMenu className=" text-white text-3xl absolute top-9  right-3 hover:bg-black" />
        <span className="block font-semibold text-white text-3xl  ">
          NavBar
        </span>
        <div className="flex items-center p-1 mt-8 ">
          <input
            className="text-2xl w-full focus-outline-none"
            typeof="text"
            placeholder="search"
          />
        </div>
        <div className="flex items-center p-1 mt-8 hover:bg-blue-900 hover:text-white ">
          <BsFillHouseDoorFill className="text-white text-2xl mr-4  " />
          <span className="text-2xl w-full focus:outline-none cursor-pointer ">
            Home
          </span>
        </div>
        <div className="flex items-center p-1 mt-8 hover:bg-blue-900 hover:text-white ">
          <BsFillBookmarkPlusFill className="text-white text-2xl mr-4" />
          <span className="text-2xl w-full focus-outline-none cursor-pointer">
            Bookmark
          </span>
        </div>
        <div className="flex items-center p-1 mt-8 hover:bg-blue-900 hover:text-white">
          <BsFillEnvelopeFill className="text-white text-2xl mr-4 " />
          <span className="text-2xl w-full cursor-pointer">Message</span>
        </div>
        <div className="flex items-center p-1 mt-8 hover:bg-blue-900 hover:text-white">
          <BsFillChatLeftTextFill className="text-white text-2xl mr-4 " />
          <span className="text-2xl w-full bg-transparent cursor-pointer">
            Chatbox
          </span>
        </div>
        <div className="flex-grow border-t mt-16 border-black  -mx-4"></div>
        <div className="flex items-center p-1 mt-16 hover:bg-blue-900 hover:text-white">
          <BsBoxArrowInRight className="text-white text-2xl mr-4" />
          <span className="text-2xl w-full cursor-pointer">Logout</span>
        </div>
      </div>
      <div className=" flex-grow bg-gray-100">
        <img src={pic} alt="Image" className="w-full h-screen " />
        <p className=" text-white absolute top-1/3 left-2/4  transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold font-family:Roboto">
          SkiP
        </p>
        <p className=" absolute top-1/3 mt-14 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-normal whitespace-pre-line ">
          Come for what you love.
        </p>
        <p className=" absolute top-1/3 mt-24 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-normal font-style- ">
          Stay for what you discover.
        </p>
        <button className="absolute top-2/3  left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-white-600 text-white font-semibold p-2 px-20 py-2 rounded ">
          Get Started
        </button>
        <button className="absolute top-2/3 mt-12 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-blue-600 text-blue font-semibold p-2 px-24 py-2 rounded ">
          Log In
        </button>
      </div>
    </div>
  );
};

export default page;
