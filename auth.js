// auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

export function setupLogin(formSelector) {
  const form = document.querySelector(formSelector);
  const emailInput = form.email;
  const passInput = form.password;
  const alertBox = document.createElement('p');
  alertBox.className = "text-red-600 text-sm mt-2";
  form.append(alertBox);

  form.addEventListener('submit', async e => {
    e.preventDefault();
    alertBox.textContent = '';
    const email = emailInput.value.trim();
    const pass = passInput.value.trim();
    if (!email || !pass) {
      alertBox.textContent = 'Por favor completá ambos campos.';
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.replace('dashboard.html');
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        alertBox.textContent = 'Correo o contraseña incorrectos.';
      } else {
        alertBox.textContent = 'Error al iniciar sesión. Reintentá.';
      }
    }
  });
}

export function requireAuth() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.replace('login.html');
    }
  });
}

export function setupLogout(btnSelector) {
  const btn = document.querySelector(btnSelector);
  if (btn) {
    btn.addEventListener('click', () => {
      signOut(auth).then(() => window.location.replace('./public/index.html'));
    });
  }
}

// Ejecuta la lógica del login una vez que se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  setupLogin('#login-form');
});
