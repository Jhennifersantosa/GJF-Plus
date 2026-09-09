import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getAuth,
signInWithEmailAndPassword
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





const firebaseConfig = {


apiKey: "SUA_API_KEY",

authDomain: "SEU_PROJETO.firebaseapp.com",

projectId: "SEU_PROJECT_ID",

storageBucket: "SEU_BUCKET",

messagingSenderId:"SEU_ID",

appId:"SEU_APP_ID"


};





const app = initializeApp(firebaseConfig);



const auth = getAuth(app);






window.login = function(){



let email =
document.getElementById("email").value;



let senha =
document.getElementById("password").value;





signInWithEmailAndPassword(
auth,
email,
senha

)


.then(()=>{


alert("Login realizado!");



})


.catch((erro)=>{


alert(
"Erro: "+erro.message
);


});



}





window.mostrarSenha=function(){


let campo =
document.getElementById("password");


campo.type =
campo.type==="password"
?
"text"
:
"password";


}
