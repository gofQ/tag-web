import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import {
  useGetScootersQuery,
  useAddScooterMutation,
  useUpdateScooterMutation,
} from "../redux/services/func";

const Panel = () => {
  const { data: scooters = [], refetch } = useGetScootersQuery();
  const [addScooter] = useAddScooterMutation();
  const [updateScooter] = useUpdateScooterMutation();

  const [formData, setFormData] = useState({
    serial_number: "",
    model: "",
    year: 2024,
    battery_level: 100,
    price_per_hour: 20.5,
    latitude: 41.015137, // Sabit değer
    longitude: 28.979530, // Sabit değer
    status: "available",
  });

  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [selectedScooter, setSelectedScooter] = useState<any>(null); // Detaylar için seçilen scooter
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal görünürlüğü

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price_per_hour" || name === "year" || name === "battery_level"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (editMode && currentId) {
        // Güncelleme işlemi
        await updateScooter({ id: currentId, ...formData }).unwrap();
        setMessage("Scooter başarıyla güncellendi.");
      } else {
        // Ekleme işlemi
        await addScooter(formData).unwrap();
        setMessage("Scooter başarıyla eklendi.");
      }
      resetForm();
      refetch(); // Scooter listesini yeniden çek
    } catch (error: any) {
      console.error("Hata:", error);
      setMessage(error?.data || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
    }
  };

  const handleEdit = (scooter: any) => {
    setFormData(scooter);
    setEditMode(true);
    setCurrentId(scooter.id);
  };

  const handleScooterClick = (scooter: any) => {
    setSelectedScooter(scooter);
    setIsModalOpen(true); // Modalı aç
  };

  const closeModal = () => {
    setIsModalOpen(false); // Modalı kapat
    setSelectedScooter(null);
  };

  const resetForm = () => {
    setFormData({
      serial_number: "",
      model: "",
      year: 2024,
      battery_level: 100,
      price_per_hour: 20.5,
      latitude: 41.015137, // Sabit değer
      longitude: 28.979530, // Sabit değer
      status: "available",
    });
    setEditMode(false);
    setCurrentId(null);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen text-white flex flex-col">
      <AdminSidebar />
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Scooter Yönetimi</h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Burada scooterlara ait tüm işlemleri gerçekleştirebilirsiniz.
        </p>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {editMode ? "Scooter Düzenle" : "Scooter Ekle"}
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="serial_number"
                value={formData.serial_number}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
                placeholder="Seri Numarası"
              />
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
                placeholder="Model"
              />
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
                placeholder="Üretim Yılı"
              />
              <input
                type="number"
                name="battery_level"
                value={formData.battery_level}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
                placeholder="Batarya Seviyesi"
              />
              <input
                type="number"
                name="price_per_hour"
                value={formData.price_per_hour}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
                placeholder="Saatlik Ücret"
              />
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                readOnly
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed"
                placeholder="Enlem"
              />
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                readOnly
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed"
                placeholder="Boylam"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-900 text-white"
              >
                <option value="available">Uygun</option>
                <option value="in use">Kullanımda</option>
                <option value="maintenance">Bakımda</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              {editMode ? "Güncelle" : "Ekle"}
            </button>
          </form>
          {message && (
            <p className="text-center mt-4 text-green-500">{message}</p>
          )}
        </div>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Scooter Listesi</h2>
          <ul className="space-y-4">
            {scooters.map((scooter: any) => (
              <li
                key={scooter.id}
                className="bg-gray-900 p-4 rounded-lg shadow flex justify-between items-center hover:bg-gray-700 transition"
              >
                <div onClick={() => handleScooterClick(scooter)} className="cursor-pointer">
                  <p className="text-lg font-bold">{scooter.model}</p>
                  <p className="text-sm text-gray-400">
                    Seri Numarası: {scooter.serial_number}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(scooter)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Düzenle
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && selectedScooter && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Scooter Detayları</h2>
            <p><strong>Model:</strong> {selectedScooter.model}</p>
            <p><strong>Seri Numarası:</strong> {selectedScooter.serial_number}</p>
            <p><strong>Üretim Yılı:</strong> {selectedScooter.year}</p>
            <p><strong>Batarya Seviyesi:</strong> {selectedScooter.battery_level}%</p>
            <p><strong>Saatlik Ücret:</strong> {selectedScooter.price_per_hour}₺</p>
            <p><strong>Durum:</strong> {selectedScooter.status}</p>
            <p><strong>Enlem:</strong> {selectedScooter.latitude}</p>
            <p><strong>Boylam:</strong> {selectedScooter.longitude}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
      <AdminFooter />
    </div>
  );
};

export default Panel;
