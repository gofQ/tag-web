import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import { useGetNotificationsQuery, useSendNotificationsMutation } from "../redux/services/func";

const Panel = () => {
  const { data: notifications, error, isLoading } = useGetNotificationsQuery();
  const [sendNotification] = useSendNotificationsMutation();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Yetkilendirme hatası. Lütfen giriş yapınız.");
      return;
    }

    try {
      await sendNotification({ title, text }).unwrap();
      setMessage("Bildirim başarıyla gönderildi!");
      setTitle("");
      setText("");


      setTimeout(() => {
        window.location.reload(); 
      }, 1000); 
    } catch (error) {
      console.error("Bildirim Gönderme Hatası:", error);
      setMessage("Bildirim gönderilirken bir hata oluştu.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen text-white flex flex-col">
      {/* Sidebar */}
      <AdminSidebar />

      {/* İçerik */}
      <div className="flex-grow p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Bildirim Paneli</h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Burada bildirime ait tüm işlemleri gerçekleştirebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sol: Bildirim Gönderme */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Yeni Bildirim Gönder
              </h2>
              <form onSubmit={handleSendNotification}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-lg font-bold mb-2"
                  >
                    Bildirim Başlığı
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Başlık giriniz"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-bold mb-2"
                  >
                    Bildirim Mesajı
                  </label>
                  <textarea
                    id="message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Mesajınızı giriniz"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
                >
                  Gönder
                </button>
                {message && (
                  <p
                    className={`text-center mt-4 ${
                      message.includes("başarıyla")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>

            {/* Sağ: Gelen Bildirimler */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Gelen Bildirimler
              </h2>
              <div className="overflow-y-auto h-[400px]">
                {isLoading && <p className="text-center">Yükleniyor...</p>}
                {error && (
                  <p className="text-center text-red-500">
                    Bildirimler yüklenirken bir hata oluştu.
                  </p>
                )}
                {notifications?.length > 0 ? (
                  notifications.map((notification: any) => (
                    <div
                      key={notification.id}
                      className="bg-gray-900 p-4 mb-4 rounded-lg shadow hover:bg-gray-700 transition"
                    >
                      <h3 className="text-lg font-bold text-pink-400">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-400">{notification.text}</p>
                    </div>
                  ))
                ) : (
                  !isLoading && (
                    <p className="text-center text-gray-400">
                      Henüz bildirim bulunmamaktadır.
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
};

export default Panel;
