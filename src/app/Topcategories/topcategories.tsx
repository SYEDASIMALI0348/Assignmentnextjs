"use client";

import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Wing Chair",
    products: "1,431 Products",
    image: "/topcate1.png", 
  },
  {
    id: 2,
    name: "Wooden Chair",
    products: "978 Products",
    image: "/topcate2.png", 
  },
  {
    id: 3,
    name: "Desk Chair",
    products: "784 Products",
    image: "/topcate3.png", 
  },
];

const TopCategories = () => {
  return (
    <section className="container bg-white mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Top Categories</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative w-full h-[508px]">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-white text-lg font-semibold">{category.name}</h3>
              <p className="text-gray-200 text-sm">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
