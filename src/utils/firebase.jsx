// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixai-6ebf1.firebaseapp.com",
  projectId: "netflixai-6ebf1",
  storageBucket: "netflixai-6ebf1.appspot.com",
  messagingSenderId: "109311726565",
  appId: "1:109311726565:web:14209a3f21c8bb398d550c",
  measurementId: "G-RGZPT2GFVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
