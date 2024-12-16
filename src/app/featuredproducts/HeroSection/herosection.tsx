import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" bg-[#F0F2F3] py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-9 lg:px-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Welcome to Chairy
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Best Furniture <br />
              Collection For Your Interior.
            </h1>
            <a
              href="#"
              className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition duration-300"
            >
              Shop Now
              <span className="ml-2 text-lg"></span>
            </a>
          </div>

          {/* Right Content (Image) */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/furniturechair.png"
              alt="Furniture Chair"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* bank logo */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 px-6">
          
          <img
            src="/logo1.png"
            alt="Zapier Logo"
            className="h-87 w-85"
          />
          <img
            src="/logo2.png"
            alt="Pipedrive Logo"
            className="h-87 w-85"
          />
          <img
            src="/cibbank.png"
            alt="CIB Bank Logo"
            className="h-87 w-85"
          />
          <img
           src="/zlogo.png"
           alt="ZOTAST Logo" 
           className="h-87 w-85"
           />
           <img
           src="/burnttoast.png"
           alt="Burnt Toast Logo"
           className="h-87 w-85"
          />
          <img
            src="/panadoc.png"
            alt="PandaDoc Logo"
            className="h-87 w-85"
          />
          <img
            src="/mozlogo.png"
            alt="MOZ Logo"
            className="h-87 w-85"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
