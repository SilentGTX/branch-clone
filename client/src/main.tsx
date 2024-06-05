import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from './contexts/AuthContext.js';




ReactDOM.createRoot(document.getElementById('root')!).render(

  <AuthProvider>
    <App />
  </AuthProvider>

)
