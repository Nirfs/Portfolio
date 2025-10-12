import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthProvider';
import { ScreenWidthProvider } from './context/ScreenWidthProvider';
import { Loader } from './components/Loader';
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScreenWidthProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ScreenWidthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)