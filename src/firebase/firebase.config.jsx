// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv_6lydcVj2-oXlW_qgK7Y_G0HBLPBTy8",
  authDomain: "hottel-booking-auth-firebase.firebaseapp.com",
  projectId: "hottel-booking-auth-firebase",
  storageBucket: "hottel-booking-auth-firebase.appspot.com",
  messagingSenderId: "581883955530",
  appId: "1:581883955530:web:5e757a432565fedced19b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;