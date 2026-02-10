import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className="navbar h-20 w-full text-black flex justify-between items-center px-8 shadow-lg">
        {/* logo  */}
        <motion.img
          src="../../public/images/logo.png"
          className="h-8 w-26 rounded"
          initial={{ x: -300 }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            duration: 2,
          }}
        ></motion.img>
        <motion.ul
          className="text-sm hidden sm:block"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 1, duration: 1 }}
        >
          <li className="inline-block mx-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/">
              <i className="ri-home-9-line text-lg"></i> Home
            </Link>
          </li>
          <li className="inline-block mx-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/about">
              <i class="ri-feedback-fill text-lg"></i> About
            </Link>
          </li>
          <li className="inline-block mx-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/teams">
              <i class="ri-team-line text-lg"></i> Teams
            </Link>
          </li>
          <li className="inline-block mx-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/services">
              {" "}
              <i class="ri-line-chart-line text-lg"></i> Services
            </Link>
          </li>
        </motion.ul>
        {/* navbar btn  */}
        <span
          className="text-white text-4xl cursor-pointer block sm:hidden"
          onClick={() => setisOpen(!isOpen)}
        >
          {" "}
          <i class="ri-menu-5-line"></i>{" "}
        </span>

        <div className="flex justify-center align-middle">
          <Link to="/login">
            <motion.button
              className="contact-btn bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 hover:pointerbg-violet-500 hover:er:bg-violet-600 ease-out focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ... transition-all cursor-pointer"
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                delay: 2,
                duration: 3,
              }}
            >
              Login
            </motion.button>
          </Link>
        </div>
      </div>

      {/* for mobile view  */}

      <div
        className={`${
          isOpen ? "block" : "hidden "
        } h-full w-[90%] z-99 text-2xl flex flex-col items-center justify-center  align-middle sm:hidden fixed  left-0 bg-gray-800 top-0 transition-all duration-150`}
      >
        <p
          className="absolute top-10 text-2xl right-10 text-white hover:text-red-500 cursor-pointer"
          onClick={() => setisOpen(!isOpen)}
        >
          {" "}
          <i className="ri-close-circle-fill"></i>{" "}
        </p>
        <motion.ul
          className=""
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 1, duration: 1 }}
        >
          <li className=" my-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/">
              <i className="ri-home-9-line text-2xl"></i> Home
            </Link>
          </li>
          <li className="my-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/about">
              <i class="ri-feedback-fill text-2xl"></i> About
            </Link>
          </li>
          <li className="my-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/teams">
              <i class="ri-team-line text-2xl"></i> Teams
            </Link>
          </li>
          <li className="my-3 cursor-pointer p-3 rounded-3xl transition-all duration-200 text-white hover:text-black hover:bg-white ease-linear">
            <Link to="/services">
              <i class="ri-line-chart-line text-2xl"></i> Services
            </Link>
          </li>
        </motion.ul>
      </div>
    </>
  );
};

export default Navbar;
