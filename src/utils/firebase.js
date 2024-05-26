// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1DKSpCzc9b6kIklMwKscG1KaCjLMrZNs",
  authDomain: "igniteflickgpt.firebaseapp.com",
  projectId: "igniteflickgpt",
  storageBucket: "igniteflickgpt.appspot.com",
  messagingSenderId: "793902092892",
  appId: "1:793902092892:web:1703e8b200a51183fccc99",
  measurementId: "G-QRMKE3SKLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
