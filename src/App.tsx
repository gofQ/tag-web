import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Panel from "./pages/Panel";
import ErrorBoundary from "./pages/ErrorBoundary";
import NotFoundError from "./pages/NotFoundError";
import Footer from "./components/Footer";
import Bar from "./components/Bar";
import Contributed from "./pages/Contributed";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Scooters from "./pages/Scooters";
import AdminContact from "./pages/AdminContact";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token"); 

  if (!token) {
    return <Navigate to="/islem" replace />; 
  }

  return children;
};

const App = () => {
  const location = useLocation();


  const isAdminPanel = location.pathname.startsWith("/admin");

  return (
    <ErrorBoundary>
      {!isAdminPanel && <Bar />}
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundError />} />
            <Route path="/emegi-gecenler" element={<Contributed />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/islem" element={<Admin />} />

            <Route
              path="/admin/panel"
              element={
                <ProtectedRoute>
                  <Panel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/location"
              element={
                <ProtectedRoute>
                  <Panel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/scooters"
              element={
                <ProtectedRoute>
                  <Scooters />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/contact"
              element={
                <ProtectedRoute>
                  <AdminContact />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      {!isAdminPanel && <Footer />}
    </ErrorBoundary>
  );
};

const RouterWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default RouterWrapper;
