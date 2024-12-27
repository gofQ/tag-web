import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useSendContactsMutation } from "../redux/services/func";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sendContacts, { isLoading, isSuccess, isError }] =
    useSendContactsMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendContacts(formData).unwrap();
      console.log("Başarılı Gönderim:", response);
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Gönderim Hatası:", error);
      alert("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white py-36 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-lg text-gray-300">
            Herhangi bir sorunuz veya öneriniz varsa, lütfen bizimle iletişime
            geçmekten çekinmeyin. Aşağıdaki formu doldurabilir veya doğrudan
            iletişim bilgilerimizi kullanabilirsiniz.
          </p>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d28.97953!3d41.015137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2z0JDQvdCw0YLRgNC10LzQuNC90LjRjw!5e0!3m2!1sen!2str!4v1620995994745!5m2!1sen!2str"
              width="100%"
              height="290"
              className="border-0 rounded-lg shadow-lg"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="subject"
              placeholder="Başlık"
              value={formData.subject}
              onChange={handleChange}
              className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="Adınız"
                value={formData.first_name}
                onChange={handleChange}
                className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Soyadınız"
                value={formData.last_name}
                onChange={handleChange}
                className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="E-posta Adresiniz"
                value={formData.email}
                onChange={handleChange}
                className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Telefon Numaranız"
                value={formData.phone_number}
                onChange={handleChange}
                className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <textarea
              name="message"
              placeholder="Mesajınız"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              maxLength={200}
              className="p-4 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-pink-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-pink-500 rounded-lg text-white font-bold hover:bg-pink-600 transition"
              disabled={isLoading}
            >
              {isLoading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
          {isSuccess && <p className="text-green-400 mt-4">Mesaj başarıyla gönderildi!</p>}
          {isError && <p className="text-red-400 mt-4">Bir hata oluştu, lütfen tekrar deneyin.</p>}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center shadow-lg">
          <FaEnvelope size={36} className="text-pink-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">E-posta</h3>
          <p className="text-gray-300">info@scootersystem.com</p>
        </div>

        <div className="flex flex-col items-center bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center shadow-lg">
          <FaPhoneAlt size={36} className="text-pink-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Telefon</h3>
          <p className="text-gray-300">+90 555 555 55 55</p>
        </div>

        <div className="flex flex-col items-center bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center shadow-lg">
          <FaMapMarkerAlt size={36} className="text-pink-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Konum</h3>
          <p className="text-gray-300">İstanbul, Türkiye</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
