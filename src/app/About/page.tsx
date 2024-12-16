import Image from "next/image";
import Link from "next/link";

// About Component
const About = () => {
  return (
    <div className="bg-white">
    <div className="flex flex-col md:flex-row w-full max-w-5xl pt-10 pb-8 gap-7 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* About Us Section */}
      <div className="bg-teal-700 text-white p-8 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-sm leading-relaxed">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort.
            Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs
            that seamlessly blend style with functionality.
          </p>
        </div>
        <Link href="/Product">
        <button className="mt-8 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded focus:outline-none">
          View collection
        </button></Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <Image
          src="/a1.png"
          alt="Chair"
          width={600}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
    </div>
    );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: "🚚",
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: "🛠️",
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: "💰",
      title: "Unbeatable prices",
      description: "For our materials and quality you won't find better prices anywhere",
    },
    {
      icon: "♻️",
      title: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl bg-white font-bold text-center mb-8">What Makes Our Brand Different</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-[#F9F9F9] text-center rounded-lg shadow-sm">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg text-[#007580] font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#007580] text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Products Component
const Products = () => {
  const products = [
    {
      name: "The Poplar suede sofa",
      price: "$99.00",
      image: "/sofa.png",
    },
    {
      name: "The Dandy chair",
      price: "$99.00",
      image: "/f1.png",
    },
    {
      name: "The Dandy chair",
      price: "$99.00",
      image: "/f2.png",
    },
  ];

  return (
    <section className="py-19 bg-white pt-8 pb-14">
      <h2 className="text-2xl justify-start bg-white font-bold text-center mb-8">Our Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {products.map((product, index) => (
          <div key={index} className="text-center bg-white">
            <div className="relative bg-white w-full h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  return (
    <main>
      <About />
      <Features />
      <Products />
    </main>
   
  );
}



