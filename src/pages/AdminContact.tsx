import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import { useGetContactsQuery } from "../redux/services/func";

const Panel = () => {
  // Redux API'den gelen iletişim verilerini al
  const { data: contactMessages, isLoading, isError } = useGetContactsQuery();

  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen text-white flex flex-col">
      {/* Sidebar */}
      <AdminSidebar />

      {/* İçerik */}
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Gelen İletişim Bilgileri</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Burada kullanıcıların göndermiş olduğu iletişim bilgilerini görebilirsiniz.
        </p>

        {/* Yükleniyor veya Hata Durumu */}
        {isLoading && (
          <p className="text-center text-gray-300">Yükleniyor...</p>
        )}
        {isError && (
          <p className="text-center text-red-500">
            Veriler yüklenirken bir hata oluştu.
          </p>
        )}

        {/* İletişim Bilgileri Tablosu */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">İletişim Mesajları</h2>
          {contactMessages && contactMessages.records.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-gray-700 py-2 px-4">Ad</th>
                  <th className="border-b border-gray-700 py-2 px-4">Soyad</th>
                  <th className="border-b border-gray-700 py-2 px-4">Telefon</th>
                  <th className="border-b border-gray-700 py-2 px-4">E-posta</th>
                  <th className="border-b border-gray-700 py-2 px-4">Konu</th>
                  <th className="border-b border-gray-700 py-2 px-4">Mesaj</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.records.map((contact: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="py-2 px-4">{contact.first_name}</td>
                    <td className="py-2 px-4">{contact.last_name}</td>
                    <td className="py-2 px-4">{contact.phone_number}</td>
                    <td className="py-2 px-4">{contact.email}</td>
                    <td className="py-2 px-4">{contact.subject}</td>
                    <td className="py-2 px-4">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            !isLoading && (
              <p className="text-center text-gray-400">
                Henüz gönderilmiş bir mesaj bulunmamaktadır.
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
