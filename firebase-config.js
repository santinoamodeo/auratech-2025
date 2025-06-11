  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAfTPjvmXUAozss3Bgq-AdMFrgqjTYwZNs",
    authDomain: "auratech-2025.firebaseapp.com",
    projectId: "auratech-2025",
    storageBucket: "auratech-2025.firebasestorage.app",
    messagingSenderId: "307196906682",
    appId: "1:307196906682:web:abe884bb96252d7fd24683"
  };


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Registrar Auth
const auth = getAuth(app);

export { auth };