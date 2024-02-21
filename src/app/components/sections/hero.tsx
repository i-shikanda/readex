import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-[url('/hero_bg.png')] bg-cover bg-repeat-none rounded-b-xl pt-8 min-h-[80vh] flex items-center justify-center text-white">
      <div className="hero__content">
        <h1 className="hero__title text-6xl font-semibold text-center">
          Expand your mind, <br /> reading a book
        </h1>
        <p className="hero__subtitle text-xl text-center mt-2">
          Read books, expand your mind, and learn something new every day <br />{" "}
          any where, any time.
        </p>
<<<<<<< HEAD
        <div className="hero__cta flex items-center justify-center space-x-4 mt-6">
          <Link
            href="/about"
            className="bg-white px-8 py-3 rounded-xl text-blue-800 font-semibold shadow-lg hover:border hover:border-white hover:bg-[#5a56e9] hover:text-white transition-all duration-300 ease-in-out"
          >
            Get Started
=======
        <div className="hero__cta">
          <Link href="/about">
            Learn More
>>>>>>> 6a5405ca44fa2edff2762df44d5b95430ed5cae8
          </Link>
          <Link
            href="/about"
            className="font-semibold px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-[#5a56e9] transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
        <div className="hero__image relative mt-32 h-36">
          <Image
            src="/hero_img.png"
            alt="Hero Image"
            width={600}
            height={600}
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}