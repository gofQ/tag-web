import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-black to-blue-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tag Admin Paneli. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;
