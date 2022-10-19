// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW_Bz0rH_E1339dhxZ1dxoUI2FazjZOz0",
    authDomain: "dragon-news-client-e0b91.firebaseapp.com",
    projectId: "dragon-news-client-e0b91",
    storageBucket: "dragon-news-client-e0b91.appspot.com",
    messagingSenderId: "185076018744",
    appId: "1:185076018744:web:011ac45b7433e562b400cd"
};

// Initialize Firebase
export const auth = getAuth(initializeApp(firebaseConfig));