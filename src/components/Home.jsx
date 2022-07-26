import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Justin Jurolan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a web developer with a passion for creating apps that solve
          problems and make people's lives easier.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600 ">
            {/* <a href="/work">View Work</a> */}
            <Link to="/work">
              <span>View Work</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
