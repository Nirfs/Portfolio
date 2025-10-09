//Librairies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthProvider';
import { ScreenWidthProvider } from './context/ScreenWidthProvider';
import Modal from "react-modal";

Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScreenWidthProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ScreenWidthProvider>
  </StrictMode>,
)
