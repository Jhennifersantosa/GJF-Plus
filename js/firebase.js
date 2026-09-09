import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2wwy6prqLpVTMoY5m1OnWGKoKhZGlRXQ",
  authDomain: "ifcursos.firebaseapp.com",
  projectId: "ifcursos",
  storageBucket: "ifcursos.firebasestorage.app",
  messagingSenderId: "136338569768",
  appId: "1:136338569768:web:79a67c2ea9b6ca8ed3531d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);