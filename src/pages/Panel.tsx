import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import { useGetİncrementQuery } from "../redux/services/func"; 

const Panel = () => {
  const { data, error, isLoading } = useGetİncrementQuery();

  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* İçerik */}
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Scooter Konumları</h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Hangi konumlardan scooter isteği var görebilirsiniz.
        </p>

        {/* Scooter Listeleme */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Konum Listesi</h2>

          {/* Yükleniyor Durumu */}
          {isLoading && (
            <p className="text-center text-gray-300">Veriler yükleniyor...</p>
          )}

          {/* Hata Durumu */}
          {error && (
            <p className="text-center text-red-500">
              Veriler yüklenirken bir hata oluştu.
            </p>
          )}

          {/* Veri Gösterimi */}
          {data?.records?.length > 0 ? (
            <table className="w-full table-auto border-gray-700 rounded-lg">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Enlem</th>
                  <th className="px-4 py-2">Boylam</th>
                  <th className="px-4 py-2">Tag Sayısı</th>
                </tr>
              </thead>
              <tbody>
                {data.records.map((location: any, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{location.latitude}</td>
                    <td className="px-4 py-2">{location.longitude}</td>
                    <td className="px-4 py-2">{location.tag_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            !isLoading && (
              <p className="text-center text-gray-400">
                Henüz konum bilgisi bulunmamaktadır.
              </p>
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
