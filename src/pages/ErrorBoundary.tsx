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

  

  render() {

    if (this.state.hasError) {
      const goToHome=()=>{
          return window.location.href=`/city`
      }
      return (
        <div className='fcol items-center justify-center w-screen h-screen font-mono'>
          <FaExclamationTriangle className='text-9xl text-red-500' />
          <h1 className='text-2xl mt-4 '>Sayfaya Geçiçi Olarak Ulaşılamıyor...</h1>
          <div onClick={goToHome} className='cursor-pointer'>
            <a className='text-lg text-blue-900 border-b-2 animate-pulse '>Anasayfaya Git</a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
