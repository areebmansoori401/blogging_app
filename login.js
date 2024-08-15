import { 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider, 
    signInWithPopup,
  
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { auth } from "./configue.js";
  
  
  const form = document.querySelector("#form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const googleBtn = document.querySelector("#google-btn");
  const forgetpassword = document.querySelector("#forget-password");
  
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location = "home.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
  
  
