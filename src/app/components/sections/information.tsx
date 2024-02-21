import Image from "next/image";
import Link from "next/link";

export default function Information() {
  return (
    <div className="py-8 flex px-12 bg-[url('/info_bg.png')] bg-no-repeat mt-10">
      <div className="flex flex-col w-1/2">
        <h1 className="font-semibold text-5xl">
          {"What will you find in Readex Library ?"}
        </h1>
        <p className="texy-xl mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio pariatur atque sint at dicta ut error quia qui maiores.
        </p>
        <div className="grid grid-cols-2 h-fit gap-2 gap-y-10 mt-8">
          <Link href={"/novels"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/novel.png"
              alt="Novel Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            Novels
          </Link>
          <Link href={"/comics"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/comic.png"
              alt="Comic Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            Comics
          </Link>
          <Link href={"/magazines"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/newspaper.png"
              alt="Magazine Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            Magazines
          </Link>
          <Link href={"/articles"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/article.png"
              alt="Articles Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            Articles
          </Link>
          <Link href={"/journals"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/agendas.png"
              alt="Journal Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            Journals
          </Link>
          <Link href={"/poetry"} className="flex items-center gap-x-2 ease transition-all hover:text-[#5a56e9]">
            <Image
              src="/ink.png"
              alt="Poetry Image"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            <p>Poetry</p>
          </Link>
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="w-full p-20">
          <Image
            src="/info_img.png"
            alt="Information Image"
            width={600}
            height={600}
            className="w-full block h-auto object-contain aspect-square bg-[#5a56e9] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}