
import Image from "next/image";

const products = [
  { id: 1, name: "Library Stool Chair", price: 20, image: "/ap1.png", tag: "New" },
  { id: 2, name: "Library Stool Chair", price: 20, oldPrice: 30, image: "/ap2.png", tag: "Sales" },
  { id: 3, name: "Library Stool Chair", price: 20, image: "/ap3.png" },
  { id: 4, name: "Library Stool Chair", price: 20, image: "/ap4.png" },
  { id: 5, name: "Library Stool Chair", price: 20, image: "/ap5.png", tag: "New" },
  { id: 6, name: "Library Stool Chair", price: 20, oldPrice: 25, image: "/ap6.png", tag: "Sales" },
  { id: 7, name: "Library Stool Chair", price: 20, image: "/ap7.png" },
  { id: 8, name: "Library Stool Chair", price: 20, image: "/ap8.png" },
  { id: 9, name: "Library Stool Chair", price: 20, image: "/ap9.png", tag: "New" },
  { id: 10,name: "Library Stool Chair", price: 20, oldPrice: 25, image: "/ap10.png", tag: "Sales" },
  { id: 11,name: "Library Stool Chair", price: 20, image: "/ap11.png" },
  { id: 12,name: "Library Stool Chair", price: 20, image: "/ap12.png" },
];

const instagramProducts = [
  { id: 1, image: "/i1.png" },
  { id: 2, image: "/i2.png" },
  { id: 3, image: "/i3.png" },
  { id: 4, image: "/i4.png" },
  { id: 5, image: "/i5.png" },
];

const AllProducts = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {/* Product Tag */}
              {product.tag && (
                <span
                  className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
                    product.tag === "Sales" ? "bg-orange-500" : "bg-green-500"
                  }`}
                >
                  {product.tag}
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const InstagramShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      {/* Newsletter Section  */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Or Subscribe To The Newsletter
        </h2>
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-full max-w-md px-4 py-2 border-b-2 border-gray-400 outline-none focus:border-black placeholder-gray-400"
          />
          <button className="text-gray-600 hover:text-black font-medium transition-all">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Follow Products And Discounts On Instagram
        </h3>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center">
        {instagramProducts.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={product.image}
                alt={`Instagram Product ${product.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Combined Page Export
const AllProductsPage = () => {
  return (
    <>
      <AllProducts />
      <InstagramShowcase />
    </>
  );
};

export default AllProductsPage;
