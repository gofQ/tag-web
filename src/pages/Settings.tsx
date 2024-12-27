import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import { useGetLoginHistoryyQuery } from "../redux/services/func";

const Panel = () => {
  const { data: loginData, error, isLoading } = useGetLoginHistoryyQuery();
  const [visibleCount, setVisibleCount] = useState(5); 

  const formatToTurkeyTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); 
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen text-white flex flex-col">
      {/* Sidebar */}
      <AdminSidebar />

      {/* İçerik */}
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Son Giriş Paneli</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Burada panele son giren adminleri görebilirsiniz.
        </p>

        {/* Yükleniyor veya Hata Durumu */}
        {isLoading && <p className="text-center text-gray-300">Yükleniyor...</p>}
        {error && (
          <p className="text-center text-red-500">Veriler yüklenirken bir hata oluştu.</p>
        )}

        {/* Son Giriş Bilgileri */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Son Giriş Bilgileri</h2>
          {loginData?.length > 0 ? (
            <>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-gray-700 py-2 px-4">ID</th>
                    <th className="border-b border-gray-700 py-2 px-4">Giriş Zamanı</th>
                    <th className="border-b border-gray-700 py-2 px-4">IP Adresi</th>
                  </tr>
                </thead>
                <tbody>
                  {loginData.slice(0, visibleCount).map((login: any, index: number) => (
                    <tr key={index} className="hover:bg-gray-700">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{formatToTurkeyTime(login.login_time)}</td>
                      <td className="py-2 px-4">{login.ip_address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Daha Fazla Göster Butonu */}
              {visibleCount < loginData.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={handleShowMore}
                    className="px-6 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition"
                  >
                    Daha Fazla Göster
                  </button>
                </div>
              )}
            </>
          ) : (
            !isLoading && (
              <p className="text-center text-gray-400">Henüz giriş kaydı yok.</p>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
};

export default Panel;
