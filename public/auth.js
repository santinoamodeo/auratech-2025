import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

console.log("auth.js cargado correctamente");

// 🔧 Tu configuración de Firebase (ajustá esto con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyAfTPjvmXUAozss3Bgq-AdMFrgqjTYwZNs",
    authDomain: "auratech-2025.firebaseapp.com",
    projectId: "auratech-2025",
    storageBucket: "auratech-2025.firebasestorage.app",
    messagingSenderId: "307196906682",
    appId: "1:307196906682:web:abe884bb96252d7fd24683"
};

// ✅ Inicializamos Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Lógica simple de login
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const emailInput = form.email;
  const passInput = form.password;

  const alertBox = document.createElement('p');
  alertBox.className = "text-red-600 text-sm mt-2";
  form.appendChild(alertBox);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertBox.textContent = '';
    console.log("auth.js iniciado")

    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    if (!email || !password) {
      alertBox.textContent = 'Completá ambos campos.';
      return;
    }

    try {
      console.log("Intentando login con", email, password);
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'dashboard.html';
    } catch (error) {
      console.error(error);
      alertBox.textContent = 'Correo o contraseña incorrectos.';
    }
  });
});

export function requireAuth() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = 'login.html';
    }
  });
}

