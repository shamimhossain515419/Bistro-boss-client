// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmxxW9AQ-X4CIIE8oWMBtI3iapydwvVYA",
  authDomain: "bistro-boss-11bb7.firebaseapp.com",
  projectId: "bistro-boss-11bb7",
  storageBucket: "bistro-boss-11bb7.appspot.com",
  messagingSenderId: "810046686154",
  appId: "1:810046686154:web:2b82cb45673717dc6b0533",
  measurementId: "G-2F03G9Y6F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;