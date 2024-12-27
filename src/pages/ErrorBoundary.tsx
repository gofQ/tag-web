import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Hata Detayları:", error, errorInfo);
  }

  handleHomeRedirect = () => {
    window.location.href = `/`; 
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white text-center px-6">
          <FaExclamationTriangle className="text-9xl text-red-500 animate-bounce" />
          <h1 className="text-4xl font-bold mt-6">Bir Hata Oluştu</h1>
          <p className="text-lg text-gray-400 mt-4">
            Sayfaya geçici olarak ulaşılamıyor. Lütfen birkaç dakika sonra tekrar deneyin.
          </p>
          <button
            onClick={this.handleHomeRedirect}
            className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-bold transition"
          >
            Anasayfaya Dön
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
