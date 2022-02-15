// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//new keys are regenerated so these keys are not detrimental 
const firebaseConfig = {
  apiKey: "AIzaSyA1pIrKsikkpiCIG4eEBsfjSI5KQcTjGYQ",
  authDomain: "valentina-834fa.firebaseapp.com",
  projectId: "valentina-834fa",
  storageBucket: "valentina-834fa.appspot.com",
  messagingSenderId: "311128380415",
  appId: "1:311128380415:web:34ad80892e46062a618dca"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export {auth, db}
