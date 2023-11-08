import React from 'react'
import { Link } from 'react-router-dom';

function AdminNav() {
  return (
    <div>
      <div>
        <nav className="relative bg-violet-900">
          <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
            <Link to="/adminProfile">
              <img
                className="w-10  ml-10 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/428/428933.png"
                alt=""
              />
            </Link>
            <div className="mx-7 flex gap-8">
              <Link to="/adminList">
                <span
                  className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                  href="index.html"
                >
                  Home
                </span>
              </Link>
              {/* <Link to="">
                {" "}
                <span
                  className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                  href="catalog.html"
                >
                  Items List
                </span>
              </Link> */}
             
            </div>
            <div className="ml-auto flex gap-4 px-5">
              <Link to="/adminLog">
                {" "}
                <sapn
                  className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                  href="login.html"
                >
                  Login
                </sapn>
              </Link>
              <span className="text-white">&#124;</span>
              <Link to="/adminSign">
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
      </div>
    </div>
  );
}

export default AdminNav