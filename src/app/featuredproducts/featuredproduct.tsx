"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "/featuredp1.png",
    tag: "New",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    image: "/featuredp2.png",
    tag: "Sales",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    image: "/featuredp3.png",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    image: "/featuredp4.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container bg-white mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Featured Products
      </h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
           {/* product image */}
            <div className="relative w-full h-[461px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />

               {/* product tag */}
                    {product.tag && (
                <span
                  className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
                    product.tag === "Sales" ? "bg-orange-500" : "bg-teal-500"
                  }`}
                >
                  {product.tag}
                </span>
              )}
            </div>

            {/* product price */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-semibold text-gray-800">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            
              <button className="absolute bottom-4 right-4 text-gray-600 hover:text-teal-500 transition">
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
