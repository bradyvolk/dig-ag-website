import firebase from "firebase";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwLRzhP2kX76lJypi8aWctkslIEerAOXQ",
  authDomain: "dig-ag-website-2bce1.firebaseapp.com",
  databaseURL: "https://dig-ag-website-2bce1-default-rtdb.firebaseio.com",
  projectId: "dig-ag-website-2bce1",
  storageBucket: "dig-ag-website-2bce1.appspot.com",
  messagingSenderId: "429650061375",
  appId: "1:429650061375:web:e4fea3d22cfa0709cb308a",
  measurementId: "G-2730GNGQ9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;