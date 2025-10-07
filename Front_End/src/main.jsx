//Librairies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './hook/authProvider';
import Modal from "react-modal";

Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
