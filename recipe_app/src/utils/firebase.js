// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ugrEwAlov76AHtczyaKHsOobpUIdvKA",
  authDomain: "recipeapp-16d90.firebaseapp.com",
  projectId: "recipeapp-16d90",
  storageBucket: "recipeapp-16d90.appspot.com",
  messagingSenderId: "461683878446",
  appId: "1:461683878446:web:500d8d0a39b8e0e0080dbf",
  measurementId: "G-GP5683VYXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);