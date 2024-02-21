import Image from "next/image";
import Link from "next/link";

export default function Information() {
  return (
    <div className="py-8 flex md:flex-row flex-col px-12 bg-[url('/info_bg.png')] bg-no-repeat mt-10">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="font-semibold text-2xl md:text-5xl">
          {"What will you find in Redex Library ?"}
        </h1>
        <p className="texy-xl mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio pariatur atque sint at dicta ut error quia qui maiores.
        </p>
        <div className="grid grid-cols-2 h-fit gap-2 gap-y-10 mt-8">
          <Link
            href={"/novels"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Novel Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 block bg-neutral-100 rounded-full"
            />
            Design Principles
          </Link>
          <Link
            href={"/comics"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Comic Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 block bg-neutral-100 rounded-full"
            />
            UI Design
          </Link>
          <Link
            href={"/magazines"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Magazine Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 block bg-neutral-100 rounded-full"
            />
            Typography
          </Link>
          <Link
            href={"/articles"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Articles Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 block bg-neutral-100 rounded-full"
            />
            WhiteSpace
          </Link>
          <Link
            href={"/journals"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Journal Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 block bg-neutral-100 rounded-full"
            />
            Visual Hierarchy
          </Link>
          <Link
            href={"/poetry"}
            className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]"
          >
            <Image
              src="/topics_icon.png"
              alt="Poetry Image"
              width={100}
              height={100}
              className="w-8 h-8 p-1.5 bg-neutral-100 rounded-full"
            />
            Color Theory
          </Link>
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <div className="w-full p-0 md:p-20 mt-6 md:mt-0">
          <Image
            src="/info_img.png"
            alt="Information Image"
            width={600}
            height={600}
            className="w-full h-auto object-contain aspect-square bg-[#5a56e9] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}