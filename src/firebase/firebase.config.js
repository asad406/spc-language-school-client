// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,

/* 
    apiKey: "AIzaSyD7aPLcxmG6wJrEEQdQUjZEoIU7sOFhUFU",
    authDomain: "spc-school.firebaseapp.com",
    projectId: "spc-school",
    storageBucket: "spc-school.appspot.com",
    messagingSenderId: "96362785642",
    appId: "1:96362785642:web:bc4d4f1e902e804961d313"

     */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;