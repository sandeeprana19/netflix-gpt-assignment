// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrRY-a7ANqJDnKuZe2XHAXV0Hx_6XbX8",
  authDomain: "netflixgpt-33711.firebaseapp.com",
  projectId: "netflixgpt-33711",
  storageBucket: "netflixgpt-33711.appspot.com",
  messagingSenderId: "1066654601289",
  appId: "1:1066654601289:web:f4c4d4b9bae2bf6dd92f98",
  measurementId: "G-DPLHJS26HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
