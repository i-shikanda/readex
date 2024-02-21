import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex px-6 md:px-12 py-4 bg-blue-500 justify-between items-center text-white">
      <Link href={"/"} className="font-semibold text-2xl">
        Redex
      </Link>

      <ul className="flex space-x-2 items-center">
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
        <li className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-xl">
          <Link href={""}>Buy Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
