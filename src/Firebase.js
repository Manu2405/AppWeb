// Importa lo necesario
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 👈 Necesario para autenticación

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDem0zujqv3ypn68xmSU8TjzBAisvHoELQ",
  authDomain: "auth-app-react-f402e.firebaseapp.com",
  projectId: "auth-app-react-f402e",
  storageBucket: "auth-app-react-f402e.appspot.com", // 🔧 corregido dominio: era `.app`, debe ser `.appspot.com`
  messagingSenderId: "459514724226",
  appId: "1:459514724226:web:bcb8da12ec8ebd8581d99b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Crea instancia de autenticación
export const auth = getAuth(app); // ✅ Exportamos `auth` para usar en App.js
