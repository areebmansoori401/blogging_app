 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyD61a45uA4UiWh3JymFPg5jm_0r0t1wRCE",
   authDomain: "blogging-app-306fc.firebaseapp.com",
   projectId: "blogging-app-306fc",
   storageBucket: "blogging-app-306fc.appspot.com",
   messagingSenderId: "757597240358",
   appId: "1:757597240358:web:e16639fdc410ff10c53ae7",
   measurementId: "G-3D4ZJ75RDR"
 };

 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);