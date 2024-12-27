import React from 'react';
import { Link } from 'react-router-dom';
import { PiScooter } from "react-icons/pi";

const Bar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md text-white px-24 py-6 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
      {/* Logo ve Yazı */}
      <div className="flex items-center space-x-3">
      <Link to="/">
  <PiScooter className="text-3xl text-white hover:text-pink-500 transition" />
</Link>

        <Link to="/">
  <span className="text-xl font-bold tracking-wide hover:text-pink-500 transition">
    Scooter Sistemi
  </span>
</Link>

      </div>

      {/* Navigasyon Linkleri */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="relative text-lg font-medium text-white hover:text-pink-500 transition"
          >
            Ana Sayfa
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-pink-500 transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/iletisim"
            className="relative text-lg font-medium text-white hover:text-pink-500 transition"
          >
            İletişim
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-pink-500 transition-all duration-300"></span>
          </Link>
        </li>
    
      </ul>
    </nav>
  );
};

export default Bar;
