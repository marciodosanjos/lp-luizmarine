import Image from "next/image";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightkblue">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <Image
                src="/assets/banner/check.svg"
                alt="check-image"
                width={20}
                height={20}
              />
              <h3 className="text-kellygreen text-sm font-semibold text-center lg:text-start">
                30% off no primeiro contato
              </h3>
            </div>
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Domine português e literatura como nunca antes
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Aprenda em aulas dinâmicas português e literatura com o professor
              Marine
            </h3>

            {/* <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
              <input
                type="Email address"
                name="q"
                className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
                placeholder="search courses..."
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                <button
                  type="submit"
                  className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                >
                  <Image
                    src={"/assets/banner/search.svg"}
                    alt="inputicon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div> */}

            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Redação
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Literatura
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={20}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Gramática
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-6 flex justify-center items-center lg:justify-end"
            style={{
              display: "flex",
              paddingTop: 30,
              //border: "1px solid black",
            }}
          >
            <Image
              src="/assets/banner/mahila.png"
              alt="nothing"
              width={500}
              height={305}
              style={{
                paddingTop: 3,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
