import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scooter from "../assets/scooter2.png";
import Image1 from "../assets/scooter5.png";
import Image2 from "../assets/scooter4.png";
import Image3 from "../assets/scooter3.png";
import { useAddGmailMutation } from "../redux/services/func";

const Home = () => {
  const [email, setEmail] = useState(""); // E-posta durumu
  const [message, setMessage] = useState(""); // Başarı/Hata mesajı
  const [addGmail] = useAddGmailMutation(); // Gmail API mutasyonu

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addGmail({ email:email }).unwrap(); 
      setMessage("Bültene başarıyla kaydoldunuz!");
      console.log("Başarılı:", response);
    } catch (error) {
      setMessage("Bu E-posta zaten kayıtlı.");
      console.error("Hata Detayları:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white px-8 pb-16">
      {/* Hoşgeldiniz Bölümü */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-40">
        <div>
          <h1 className="text-5xl font-bold mb-6">Hoşgeldiniz!</h1>
          <p className="text-lg text-gray-300 mb-6">
            Scooter Sistemi ile şehir içi ulaşımınızı kolaylaştırın. Çevre dostu, hızlı ve ekonomik çözümlerimizle hayatınızı kolaylaştırıyoruz.
          </p>
          <Link
            to="/iletisim"
            className="inline-block px-6 py-3 bg-pink-500 rounded-lg text-white font-bold hover:bg-pink-600 transition"
          >
            İletişime Geçin
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src={Scooter}
            alt="Scooter"
            className="w-full max-w-md rounded-lg "
          />
        </div>
      </div>

      {/* Modern ve Şık Kullanım Başlığı */}
      <div className="text-center py-32">
        <h2 className="text-4xl font-bold mb-6">Modern ve Şık Tasarım</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Scooter Sistemi, modern tasarımı ve kolay kullanımıyla şehir içi ulaşımı yeniden tanımlıyor.
          Çevre dostu yapısıyla hem doğayı koruyun hem de hayatınızı kolaylaştırın.
        </p>
      </div>

      {/* İçerik Bölümleri */}
      <div className="container mx-auto space-y-32">
        {/* Bölüm 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={Image1}
              alt="Kolay Kullanım"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Kolay Kullanım</h3>
            <p className="text-lg text-gray-300">
              Scooter Sistemi, herkesin kolayca kullanabileceği şekilde tasarlanmıştır. Basit arayüz ve ergonomik tasarımı ile istediğiniz her yerde hızlı ulaşım sağlar.
            </p>
          </div>
        </div>

        {/* Bölüm 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Çevre Dostu</h3>
            <p className="text-lg text-gray-300">
              Elektrikli scooterlarımız sıfır emisyon hedefiyle çalışır. Hem doğaya katkı sağlarken hem de ekonomik bir ulaşım seçeneği sunar.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Image2}
              alt="Çevre Dostu"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bölüm 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={Image3}
              alt="Hızlı Ulaşım"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Hızlı Ulaşım</h3>
            <p className="text-lg text-gray-300">
              Scooter Sistemi, yoğun şehir hayatında hızlı ulaşım sağlar. Zaman kaybetmeden gitmek istediğiniz yere kolayca ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* Bültene Kayıt Bölümü */}
      <div className="text-center py-16 mt-20">
        <h2 className="text-3xl font-bold mb-6">Bültene Kayıt Olun</h2>
        <p className="text-lg text-gray-300 mb-6">
          En son haberlerden ve kampanyalardan haberdar olmak için bültenimize kaydolun!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="   E-posta Adresiniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-4 rounded-full bg-gray-800 text-white text-lg focus:ring-2 focus:ring-pink-400 outline-none transition"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition"
          >
            Kayıt Ol
          </button>
        </form>
        {message && (
          <p className="mt-4 text-lg font-bold text-pink-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
