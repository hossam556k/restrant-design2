import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Carticon from "./Carticon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div className="flex justify-between h-12 items-center p-4 text-red-800 border-b-2 border-b-red-600 uppercase md:h-20 lg-px-20 xl:px-40">
      <div className="hidden md:flex gap-4">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* logo*/}
      <div>
        <Link href="/" className="text-xl md:font-bold flex-1 md:text-center">
          Massimo
        </Link>
      </div>
      {/*mobilemenu*/}
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 flex justify-center items-center ">
      <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Carticon />
      </div>
    </div>
  );
}

export default Navbar;
