import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white py-10 px-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Scooter Sistemi</h3>
          <p className="text-gray-300">
            Scooter Sistemi, şehir içi ulaşımı kolaylaştırmak için tasarlanmış modern bir çözümdür. 
            Çevreci ve ekonomik bir ulaşım sağlıyoruz.
          </p>
        </div>

        {/* Ofis Bilgileri */}
        <div>
          <h3 className="text-lg font-bold mb-4">Ofis</h3>
          <p className="text-gray-300 mb-2">İstanbul, Türkiye</p>
          <p className="text-gray-300 mb-2">info@scootersystem.com</p>
          <p className="text-gray-300">+90 555 555 55 55</p>
        </div>

        {/* Linkler */}
        <div>
          <h3 className="text-lg font-bold mb-4">Bağlantılar</h3>
          <ul className="space-y-2">
            <li>
              <a href="/islem" className="hover:text-gray-400 transition">Admin Sayfası</a>
            </li>
            <li>
              <a href="/emegi-gecenler" className="hover:text-gray-400 transition">Emeği Geçenler</a>
            </li>
            <li>
              <a href="/iletisim" className="hover:text-gray-400 transition">İletişim</a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya ve Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Bizi Takip Edin</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <RiTwitterXFill size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="text-center border-t border-gray-600 mt-8 pt-4">
        <p>© 2024 Scooter Sistemi. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
