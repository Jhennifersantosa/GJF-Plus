import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB2wwy6prqLpVTMoY5m1OnWGKoKhZGlRXQ",
    authDomain: "ifcursos.firebaseapp.com",
    projectId: "ifcursos",
    storageBucket: "ifcursos.firebasestorage.app",
    messagingSenderId: "136338569768",
    appId: "1:136338569768:web:79a67c2ea9b6ca8ed3531d",
    measurementId: "G-H1XFGGJC31"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.cadastrar = async () => {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;

    if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            senha
        );

        alert("Conta criada com sucesso!");

        window.location.href = "index.html";

    } catch (erro) {

        switch (erro.code) {

            case "auth/email-already-in-use":
                alert("Este e-mail já está cadastrado.");
                break;

            case "auth/invalid-email":
                alert("E-mail inválido.");
                break;

            case "auth/weak-password":
                alert("A senha deve ter pelo menos 6 caracteres.");
                break;

            default:
                alert("Erro: " + erro.message);
        }
    }
};