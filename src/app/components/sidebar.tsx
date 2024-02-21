import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Sidebar = ({open} : {open: boolean}) => {

  return (
    <div
      className={
        open
          ? "absolute w-4/6 flex flex-col gap-y-32 p-10 h-screen bg-white top-0 right-0 transition-all ease duration-300"
          : "right-[-1000px] top-0 transition-all ease duration-300"
      }
    >
      <ul className="space-y-8 items-center flex flex-col">
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
        <li className=" px-4 py-2 bg-[#5a56e9] text-white group cursor-pointer font-semibold rounded-xl shadow-xl active:outline outline-1 outline-white active:bg-transparent transition-all ease duration-300">
          <Link href={""} className="flex items-center justify-center gap-x-2">
            <Image
              src={"/book_img.png"}
              alt="Cart Image"
              width={20}
              height={20}
              className="w-5 h-5 invert group-active:invert-0 ease transition-all duration-300"
            />
            Buy Book
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar