import React, { useState } from "react";
import bed from "../../assets/images/bed.svg";
import sleep from "../../assets/images/sleep.svg"; 
import outdoor from "../../assets/images/outdoor.svg"; 
import sofa from "../../assets/images/sofa.svg"; 
import kitchen from "../../assets/images/kitchen.svg"; 
import food from "../../assets/images/food.svg"; 
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandle() {
    setIsOpen(!isOpen);
  }
  const menuClass = isOpen ? "block" : "hidden";
  
  return (
    <div>
      <nav className="relative bg-violet-900">
        <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
          <button className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400">
            <div onClick={clickHandle} className="flex justify-around" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              All categories
            </div>
          </button>
          <div className="mx-7 flex gap-8">
            <Link to="/">
              <span
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="index.html"
              >
                Home
              </span>
            </Link>
            <Link to="/catalog">
              {" "}
              <span
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="catalog.html"
              >
                Catalog
              </span>
            </Link>
            <Link to="/about">
              <span
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="about-us.html"
              >
                About Us
              </span>
            </Link>
            <Link to="/contact">
              <span
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="contact-us.html"
              >
                Contact Us
              </span>
            </Link>
          </div>
          <div className="ml-auto flex gap-4 px-5">
            <Link to="/login">
              {" "}
              <sapn
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="login.html"
              >
                Login
              </sapn>
            </Link>
            <span className="text-white">&#124;</span>
            <Link to="/signup">
              {" "}
              <span
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                href="sign-up.html"
              >
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <section
        className={`absolute ${menuClass} left-0 right-0 z-10 w-full border-b border-r border-l bg-white`}
      >
        <div className="mx-auto flex max-w-[1200px] py-10">
          <div className="w-[300px] border-r">
            <ul className="px-5">
              <li className="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400">
                <img width="15px" height="15px" src={bed} alt="Bedroom icon" />
                Bedroom
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>

              <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400">
                <img
                  width="15px"
                  height="15px"
                  src={sleep}
                  alt="bedroom icon"
                />
                Matrass
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>

              <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover-bg-neutral-100 active-bg-amber-400">
                <img
                  width="15px"
                  height="15px"
                  src={outdoor}
                  alt="bedroom icon"
                />
                Outdoor
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>

              <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover-bg-neutral-100 active-bg-amber-400">
                <img width="15px" height="15px" src={sofa} alt="bedroom icon" />
                Sofa
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>

              <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover-bg-neutral-100 active-bg-amber-400">
                <img
                  width="15px"
                  height="15px"
                  src={kitchen}
                  alt="bedroom icon"
                />
                Kitchen
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>

              <li className="active:blue-900 flex items-center gap-2 py-2 px-3 hover-bg-neutral-100 active-bg-amber-400">
                <img width="15px" height="15px" src={food} alt="Food icon" />
                Living room
                <span className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex gap-6">
              <div className="mx-5">
                <p className="font-medium text-gray-500">BEDS</p>
                <ul className="text-sm leading-8">
                  <li>
                    <a href="product-overview.html">Italian bed</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Queen-size bed</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Wooden craft bed</a>
                  </li>
                  <li>
                    <a href="product-overview.html">King-size bed</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <p className="font-medium text-gray-500">LAMPS</p>
                <ul className="text-sm leading-8">
                  <li>
                    <a href="product-overview.html">Italian Purple Lamp</a>
                  </li>
                  <li>
                    <a href="product-overview.html">APEX Lamp</a>
                  </li>
                  <li>
                    <a href="product-overview.html">PIXAR lamp</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Ambient Nightlamp</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <p className="font-medium text-gray-500">BEDSIDE TABLES</p>
                <ul className="text-sm leading-8">
                  <li>
                    <a href="product-overview.html">Purple Table</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Easy Bedside</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Soft Table</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Craft Table</a>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <p className="font-medium text-gray-500">SPECIAL</p>
                <ul className="text-sm leading-8">
                  <li>
                    <a href="product-overview.html">Humidifier</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Bed Cleaner</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Vacuum Cleaner</a>
                  </li>
                  <li>
                    <a href="product-overview.html">Pillow</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
