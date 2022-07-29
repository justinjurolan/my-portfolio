import React from 'react';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6img.jpg';
import project7 from '../assets/project7layag.jpg';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <br />
        <br />
        <div className="py-8">
          <p className="text-2xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Here are the few past projects I've worked on.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${project7})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Travel Booking App
              </span>
              <br />
              <br />
              <span className="font-medium">
                Travel to different tourist attraction here in the Philippines.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://62e2dd6e4844471ccf13f227--lively-gumption-2fffc2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/mern-bookingapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Snake JS Game
              </span>
              <br />
              <br />
              <span className="font-medium">
                A fun retro game built using HTML, CSS and JavaScript.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://justinjurolan.github.io/Snake-JS-Game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/Snake-JS-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${project3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                React To-Do App
              </span>
              <br />
              <br />
              <span className="font-medium">
                List down your to-do list with this app. Built using React JS.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://justinjurolan.github.io/todo-list/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/todo-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Pokedex App
              </span>
              <br></br>
              <br />
              <span className="font-medium">
                See your favorite Pokemon's with this app. Built using React JS.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://justinjurolan.github.io/pokemon-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/pokemon-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${project5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                React E-Commerce Clothing App
              </span>
              <br></br>
              <br />
              <span className="font-medium">
                Select different kinds of clothing with this app. Built using
                React JS.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://project5-react-ecommerce.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/react-ecommerceapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project6})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack E-Commerce Book App
              </span>
              <br></br>
              <br />
              <span className="font-medium">
                Browse thru different kind of books with this app. Built using
                MongoDB, React JS, Express JS, Node JS.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://mern-ecomm-bookshop.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/justinjurolan/mernstack-ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
