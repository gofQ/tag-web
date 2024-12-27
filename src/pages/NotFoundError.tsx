import React from 'react';
import { FaSadTear } from 'react-icons/fa';

const NotFoundError = () => {
  const goToHome = () => {
    window.location.href = `/`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white">
      <FaSadTear className="text-9xl text-gray-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Sayfa Bulunamadı</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Aradığınız sayfa bulunamadı veya kaldırılmış olabilir. Lütfen başka bir sayfayı ziyaret etmeyi deneyin.
      </p>
      <button
        onClick={goToHome}
        className="px-6 py-3 bg-pink-500 text-white rounded-lg font-bold hover:bg-pink-600 transition"
      >
        Anasayfaya Git
      </button>
    </div>
  );
};

export default NotFoundError;
