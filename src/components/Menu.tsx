"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Carticon from "./Carticon";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

function Menu() {
  const [open, setOpen] = useState(true);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
     {!open && <div className="bg-red-800 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] animate-[moveup_2s_ease-in-out] w-full flex flex-col gap-8 items-center justify-center text-3xl z-10 ">
        {links.map((link) => (
          <Link className="animate-[moveright_3s_ease-in-out_1]" href={link.url} key={link.id} onClick={() => setOpen(true)}>
            {link.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" className="animate-[moveright_3s_ease-in-out_1]" onClick={() => setOpen(true)}>Login</Link>
        ) : (
          <Link href="/order" className="animate-[moveright_3s_ease-in-out_1]" onClick={() => setOpen(true)}>Order</Link>
        )}
        <Link href="/cart" className="animate-[moveright_3s_ease-in-out_1]" onClick={() => setOpen(true)}>
            <Carticon/>
        </Link>
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
      </div>  }
      
      
    </div>
  );
}

export default Menu;
