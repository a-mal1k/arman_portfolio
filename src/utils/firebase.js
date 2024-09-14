// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlZrXsIFJgj0FaruoEtvHciecc7lPDSoI",
  authDomain: "blogoopedia.firebaseapp.com",
  projectId: "blogoopedia",
  storageBucket: "blogoopedia.appspot.com",
  messagingSenderId: "68914194926",
  appId: "1:68914194926:web:41b80970c7d4fb0e6306ff",
  measurementId: "G-42V2QQH1XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);