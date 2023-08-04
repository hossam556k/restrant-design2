import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";


function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-700">
      {/* WRAPPER*/}
      <div className="w-max flex">
        {/*single item*/}
        {featuredProducts.map(item=>(
            <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/*image container */}
            {item.img&& (<div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>)}
            
            {/*text container */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase ">{item.title}</h1>
              <p className="p-2 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-red-800 text-yellow-50 py-2 px-4 hover:bg-white hover:text-red-500 hover:border-2 border-sky-100 shadow-lg transition-all duration-1000">Add to Cart</button>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default Featured;
