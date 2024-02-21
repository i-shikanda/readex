import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-[url('/hero_bg.png')] bg-cover bg-repeat-none rounded-b-xl pt-8 min-h-[80vh] flex items-center justify-center text-white">
      <div className="hero__content">
        <h1 className="hero__title text-4xl md:text-6xl font-bold text-center">
          Expand your mind, <br /> reading a book
        </h1>
        <p className="hero__subtitle md:text-xl text-center mt-2">
          Read books, expand your mind, and learn something new every day <br />{" "}
          any where, any time.
        </p>
        <div className="hero__cta mt-8 flex items-center justify-center space-x-10">
          <Link
            href="/about"
            className="px-10 py-2 bg-white rounded-xl shadow-xl text-[#5a56e9] font-semibold hover:border hover:bg-transparent hover:text-white transition-all duration-300 ease"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="font-semibold px-6 py-2 rounded-xl border border-white hover:bg-white hover:text-[#5a56e9] transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
        <div className="hero__image relative mt-32 h-36 rounded-b-xl">
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