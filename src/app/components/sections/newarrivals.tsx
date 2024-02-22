import Image from "next/image";

export default function NewArrivals() {
  return (
    <section className="flex items-center bg-slate-100 py-10 flex-col w-full">
      <div className="w-[75%]">
        <header className="flex justify-between w-full p-20">
          <div className="w-[75%]">
            <h1 className="text-3xl font-bold">New Arrivals</h1>
            <p className="font-medium text-xl">
              Find our top categories that will help you with what you are
              looking for
            </p>
          </div>
          <div className="flex space-x-2 w-[25%]">
            <div className="rounded-full h-12 w-12 border-2 border-blue-400"></div>
            <div className="rounded-full h-12 w-12 border-2 border-blue-400 bg-blue-400"></div>
          </div>
        </header>
        <div className="flex space-x-8 justify-center bg-white shadow py-10 px-40 w-[100%] rounded-3xl">
          <div className="rounded-3xl p-4 bg-orange-300">
            <div>
              <Image
                src="/newarrivals_img.png"
                alt="New Arrivals Image"
                width={600}
                height={600}
                width={600}
                className="w-1/2"
                alt="New Arrivals Image"
              />
            </div>
            <div className="bg-white rounded-3xl p-4">
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Horlicks</h1>
                  <p className="text-orange-500 font-medium">$34.00</p>
                </div>
                <p className="font-medium">Sweet molted milk hot drink</p>
              </div>
              <div>
                <button className="rounded-xl bg-transparent border-2 px-4 py-1 border-orange-400 font-medium">
                  View Book Demo
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-orange-300">
            <div>
              <Image
                src="/newarrivals_img.png"
                alt="New Arrivals Image"
                width={600}
                height={600}
                width={600}
                className="w-1/2"
                alt="New Arrivals Image"
              />
            </div>
            <div className="bg-white rounded-3xl p-4">
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Horlicks</h1>
                  <p className="text-orange-500 font-medium">$34.00</p>
                </div>
                <p className="font-medium">Sweet molted milk hot drink</p>
              </div>
              <div>
                <button className="rounded-xl bg-transparent border-2 px-4 py-1 border-orange-400 font-medium">
                  View Book Demo
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl p-4 bg-orange-300">
            <div>
              <Image
                src="/newarrivals_img.png"
                alt="New Arrivals Image"
                width={600}
                height={600}
                width={600}
                className="w-1/2"
                alt="New Arrivals Image"
              />
            </div>
            <div className="bg-white rounded-3xl p-4">
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Horlicks</h1>
                  <p className="text-orange-500 font-medium">$34.00</p>
                </div>
                <p className="font-medium">Sweet molted milk hot drink</p>
              </div>
              <div>
                <button className="rounded-xl bg-transparent border-2 px-4 py-1 border-orange-400 font-medium">
                  View Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
