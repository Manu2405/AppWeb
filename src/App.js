import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("¡Registro exitoso!");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login / Registro</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={register}>Registrarse</button>
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
}

export default App;
