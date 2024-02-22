"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({toggle} : {toggle: (value: boolean) => {}}) => {
  return (
    <nav className="flex px-6 md:px-12 py-4 bg-[#5a56e9] justify-between items-center text-white">
      <Link
        href={"/"}
        className="font-semibold text-2xl flex items-center gap-x-2"
      >
        <Image
          src={"/readex_logo.png"}
          alt="Logo Image"
          width={40}
          height={40}
          className="w-8 h-8"
        />
        Redex
      </Link>

      <ul className="space-x-8 items-center hidden md:flex">
        <li>
          <Link href={""}>Home</Link>
        </li>
        <li>
          <Link href={""}>About</Link>
        </li>
        <li>
          <Link href={""}>Store</Link>
        </li>
        <li>
          <Link href={""}>Contact us</Link>
        </li>
      </ul>
      <ul>
        <li className="hidden md:flex px-4 py-2 bg-white text-black group cursor-pointer font-semibold rounded-xl shadow-xl  hover:outline outline-1 outline-white hover:text-white hover:bg-transparent transition-all ease duration-300">
          <Link href={""} className="flex items-center gap-x-2">
            <Image
              src={"/book_img.png"}
              alt="Cart Image"
              width={20}
              height={20}
              className="w-5 h-5 group-hover:invert"
            />
            Buy Book
          </Link>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div className="flex md:hidden justify-center z-20">
        <label htmlFor="hamburger-btn" className="hamburger-bar group relative">
        <input
          type="checkbox"
          title="hamburger-btn"
          className="hamburger-btn peer hidden"
          id="hamburger-btn"
          name="hamburger-btn"
          onChange={(e) => toggle(e.target.checked)}
        />
        <span className="bar h-1 bg-white w-9 block mb-2 rounded-xl origin-top-left peer-checked:rotate-45 peer-checked:bg-[#5a56e9] ease transition-all"></span>
        <span className="bar h-1 bg-white w-8 block mb-2 rounded-xl origin-center peer-checked:w-0 ease transition-all"></span>
        <span className="bar h-1 bg-white w-9 block mb-2 rounded-xl origin-bottom-left peer-checked:-rotate-45 peer-checked:bg-[#5a56e9] ease transition-all"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
