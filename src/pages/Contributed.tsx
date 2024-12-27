import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contributed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white py-36 px-8">
      <div className="container mx-auto text-center">
        {/* Başlık */}
        <h1 className="text-4xl font-bold mb-4">Emeği Geçenler</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Bu projede emeği geçen tüm ekip arkadaşlarımıza teşekkür ediyoruz. İşte projenin arkasındaki ekip:
        </p>

        {/* Ekip Üyeleri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Üye 1 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Yusuf Karataş"
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white"
            />
            <h3 className="text-xl font-bold mb-2">Yusuf Karataş</h3>
            <p className="text-pink-400 mb-2">Backend Geliştirici</p>
            <p className="text-gray-300 mb-4">
              API ve veritabanı yönetimini üstlenerek performans optimizasyonunda mükemmel bir iş çıkardı.
            </p>
            {/* Sosyal Medya */}
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Üye 2 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Adem Taşdelen"
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white"
            />
            <h3 className="text-xl font-bold mb-2">Adem Taşdelen</h3>
            <p className="text-pink-400 mb-2">Frontend Geliştirici</p>
            <p className="text-gray-300 mb-4">
              Kullanıcı arayüzlerini tasarlayarak modern ve kullanıcı dostu bir deneyim sağladı.
            </p>
            {/* Sosyal Medya */}
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Üye 3 */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Merve Cengiz"
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white"
            />
            <h3 className="text-xl font-bold mb-2">Merve Cengiz</h3>
            <p className="text-pink-400 mb-2">Proje Yöneticisi</p>
            <p className="text-gray-300 mb-4">
              Ekip koordinasyonu sağlayarak projenin zamanında ve hedeflere uygun şekilde tamamlanmasını sağladı.
            </p>
            {/* Sosyal Medya */}
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributed;
