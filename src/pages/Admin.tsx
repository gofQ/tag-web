import React, { useState, useEffect } from "react";
import { useLoginMutation, useRegisterMutation } from "../redux/services/admin";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [login] = useLoginMutation(); 
  const [register] = useRegisterMutation(); 

  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/panel"); 
    }
  }, [navigate]);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ username, password }).unwrap();
      localStorage.setItem("token", response.token); 
      setMessage("Giriş başarılı! yönlendiriliyorsunuz...");
      console.log("Başarılı:", response);

      setTimeout(() => {
        navigate("/admin/panel");
      }, 3000);
    } catch (error) {
      setMessage("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
      console.error("Hata:", error);
    }
  };


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({ username, password }).unwrap();
      setMessage("Kayıt başarılı! Artık giriş yapabilirsiniz.");
      console.log("Başarılı:", response);
      setUsername("");
      setPassword("");
    } catch (error) {
      setMessage("Bu bilgiler ile bir admin kayıtlı.");
      console.error("Hata:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white flex justify-center items-center px-8">
      <div className="bg-gray-800 bg-opacity-40 p-12 rounded-lg shadow-lg w-full max-w-md">
        {/* Sekme Butonları */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              isLogin ? "bg-pink-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              !isLogin ? "bg-pink-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Kayıt Ol
          </button>
        </div>
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Admin Giriş</h2>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition"
            >
              Giriş Yap
            </button>
            {message && (
              <p
                className={`text-center mt-4 ${
                  message.includes("başarılı")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Admin Kayıt</h2>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="password"
              placeholder="Şifre Oluşturun"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition"
            >
              Kayıt Ol
            </button>
            {message && (
              <p
                className={`text-center mt-4 ${
                  message.includes("başarılı")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Admin;
