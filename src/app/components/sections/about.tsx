import Image from "next/image";

export default function About() {
  return (
    <div className="py-8 px-12 bg-[#ffeddf] mt-20 pt-12">
      <h1 className="flex">
        <span className="text-4xl font-semibold flex w-1/2">
          About Redex Library.
        </span>
        <span className="flex w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio pariatur atque sint at dicta ut error quia qui maiores.
        </span>
      </h1>
      <div className="flex mt-8 bg-[#fbb7c6] rounded-xl">
        <Image
          src="/about_img.png"
          alt="About Image"
          width={600}
          height={600}
          className="w-1/2"
        />
        <div className="w-1/2 bg-white rounded-xl flex items-center justify-center m-6">
          <h1 className="text-4xl font-semibold">
            The Redex Library.
          </h1>
        </div>
      </div>
    </div>
  );
}