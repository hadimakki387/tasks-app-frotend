"use client";
import Image from "next/image";
import React, { useState } from "react";


function Header() {
  const [bar, setBar] = useState(false);
  const showBar = () => {
    setBar(!bar);
  };

  return (
    <header className="flex justify-between items-center bg-yellow-500 p-2">
      <h1 className="  text-white font-medium text-3xl">Task Manager</h1>
      <Image
        src={"/user.png"}
        alt="user"
        height={70}
        width={70}
        className="w-16 rounded-full hover:cursor-pointer "
        onClick={showBar}
      />
      {bar && (
        <div className="absolute right-8 top-20 bg-white  text-lg rounded-md">
          <div className="hover:bg-slate-400 transition-all duration-300  px-4 py-2 hover:cursor-pointer">
            Log Out
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
