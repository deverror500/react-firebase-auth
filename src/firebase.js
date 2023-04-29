// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcS2pMdzWahCvic98zbOI1QWpAO5VSwDk",
  authDomain: "first-application-6a30e.firebaseapp.com",
  databaseURL: "https://first-application-6a30e.firebaseio.com",
  projectId: "first-application-6a30e",
  storageBucket: "first-application-6a30e.appspot.com",
  messagingSenderId: "489519119782",
  appId: "1:489519119782:web:951d61009523ec55d16367",
  measurementId: "G-95EN6RHQ3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
