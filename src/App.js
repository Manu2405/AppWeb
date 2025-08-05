import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Modal from "react-modal";

Modal.setAppElement('#root'); // necesario para accesibilidad

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showModal("¡Registro exitoso!");
    } catch (error) {
      showModal(`Error al registrar: ${error.message}`);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showModal("Inicio de sesión exitoso");
    } catch (error) {
      showModal(`Error al iniciar sesión: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login / Registro</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Correo"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={register}>Registrarse</button>
        <button style={styles.button} onClick={login}>Iniciar Sesión</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
        contentLabel="Mensaje"
      >
        <h3>{modalMessage}</h3>
        <button style={styles.closeButton} onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: 30,
    borderRadius: 12,
    background: "#fefefe",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    marginBottom: 20
  },
  input: {
    width: "90%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  closeButton: {
    marginTop: 20,
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer"
  }
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 30,
    textAlign: "center",
    borderRadius: 12
  }
};

export default App;
