import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token'ı temizle
    navigate("/"); // Ana sayfaya yönlendir
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-white fixed top-4 right-4 z-50 p-2 rounded-full bg-transparent hover:bg-gray-800 transition duration-300 focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <h1 className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin Paneli
        </h1>
        <ul className="flex flex-col mt-4 space-y-4">
          {/* Bildirim İşlemleri */}
          <li>
            <Link
              to="/admin/notifications"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Bildirim İşlemleri
            </Link>
          </li>

          {/* Panel */}
          <li>
            <Link
              to="/admin/location"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              İstenilen Konum
            </Link>
          </li>

          {/* Ayarlar */}
          <li>
            <Link
              to="/admin/settings"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Son Girişler
            </Link>
          </li>

          {/* Scooter İşlemleri */}
          <li>
            <Link
              to="/admin/scooters"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Scooter İşlemleri
            </Link>
          </li>

          {/* İletişim */}
          <li>
            <Link
              to="/admin/contact"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              İletişim
            </Link>
          </li>

          {/* Çıkış Yap */}
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              Çıkış Yap
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
