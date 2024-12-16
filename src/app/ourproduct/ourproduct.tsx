import Image from "next/image";

const OurProducts = () => {
 
  const products = [
    {
      id: 1,
      image: "/o1.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 2,
      image: "/o2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      label: "Sales",
    },
    {
      id: 3,
      image: "/o3.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/o4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 5,
      image: "/o5.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 6,
      image: "/o6.png",
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      label: "Sales",
    },
    {
      id: 7,
      image: "/o7.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 8,
      image: "/o8.png",
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  return (
    <section className="bg-white container mx-auto px-4 py-8 pb-40">
     {/* section title */}
      <h2 className="text-4xl font-bold text-center mb-6">Our Products</h2>

      {/* product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            {/* product Image */}
            <div className="relative h-[337px]">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* product details */}
            <div className="p-4">
              {/* product title */}
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>

              {/* price */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-gray-900">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {product.label && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                  product.label === "NEW" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {product.label}
              </span>
            )}

            {/*Icon */}
            <button className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
            🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
