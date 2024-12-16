import Image from "next/image";

const chairgallery = () => {
  return (
    <section className=" bg-white container mx-auto px-4 py-8 pt-35 pb-35">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Left Text Section */}
        <div className="md:col-span-1 flex md:justify-center justify-start">
          <p className="transform -rotate-90 text-gray-800 text-3xl font-semibold whitespace-nowrap hidden md:block">
            EXPLORE NEW AND POPULAR STYLES
          </p>
          <p className="text-gray-800 text-lg font-semibold block md:hidden text-center">
            EXPLORE NEW AND POPULAR STYLES
          </p>
        </div>

        {/* Right Grid Section */}
        <div className="md:col-span-11 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 relative h-[648px] w-[548px] ">
            <Image
              src="/explore1.png"
              alt="Orange Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Small Images */}
          <div className="relative h-[312px]">
            <Image
              src="/chair1.png" 
              alt="White Chair 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-[312px]">
            <Image
              src="/chair4.png" 
              alt="Gray Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-[312px]">
            <Image
              src="/chair3.png"
              alt="White Chair 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-[312px]">
            <Image
              src="/chair4.png"
              alt="White Chair 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default chairgallery;

