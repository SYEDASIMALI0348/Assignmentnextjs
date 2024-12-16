import Link from "next/link";
import React from "react";

const Navigation =() => {
return (
 //Main navbar container
<div className="w-full ">
  {/* first navbar */}
  <div className=" bg-[#272343] text-white text-sm py-2 flex justify-center items-center h-12 font-bold">
    <span>✔ Free Shipping on All Orders Over $50</span>
  </div>
 {/*Second Navbar */}
  <div className=" bg-[#F0F2F3] shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo wala Section  */}
      <div className="flex items-center ">
        <span className="text-teal-500 text-3xl font-bold">
         <img src="logo.png" alt="comforty logo" />
        </span>
        <span className="text-2xl font-semibold text-gray-800">Comforty</span>
      
      </div>

     
      {/*Cart Button*/}
      <div>
        <button className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
          <span>🛒</span>
          <span className="font-medium text-gray-700">Cart</span>
        </button>
      </div>
    </div>
  </div>

  {/*Bottom Contact Section*/}
 
  <div className="pl-52 font-bold justify-center bg-gray-50 py-2 border-t">
  <nav className=" mx-auto  hidden md:flex space-x-9 ">
        <Link href="/Home" className="text-teal-500 font-semibold border-b-2 border-teal-500">Home</Link>
        <Link href="#" className="text-gray-700 hover:text-teal-500 transition">Shop</Link>
        <Link href="/Product" className="text-gray-700 hover:text-teal-500 transition">Product</Link>
        <Link href="/About" className="text-gray-700 hover:text-teal-500 transition">About</Link>
      </nav>
       <div className="container mx-auto flex justify-end px-4 items-center">
      

      <span className="text-gray-600">Contact:<span className="font-medium"> 0348 2358662</span></span>
    </div>
  </div>
</div>

 )  
} 

export default Navigation;

