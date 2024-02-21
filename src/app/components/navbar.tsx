import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex px-6 md:px-12 py-4 bg-[#5a56e9] justify-between items-center text-white">
      <Link href={"/"} className="font-semibold text-2xl flex items-center gap-x-2">
        <Image
          src={"/readex_logo.png"}
          alt="Logo Image"
          width={40}
          height={40}
          className="w-8 h-8"
        />
        Redex
      </Link>

      <ul className="flex space-x-8 items-center">
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
        <li className="px-4 py-2 bg-white text-black group cursor-pointer font-semibold rounded-xl shadow-xl  hover:outline outline-1 outline-white hover:text-white hover:bg-transparent transition-all ease duration-300">
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
    </nav>
  );
};

export default Navbar;
