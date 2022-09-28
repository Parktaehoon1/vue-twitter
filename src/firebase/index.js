import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // <----

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR1zD_HXhnnTn6QYUVOKxojK4nCIJY3zI",
  authDomain: "twitterclone-1ebe8.firebaseapp.com",
  projectId: "twitterclone-1ebe8",
  storageBucket: "twitterclone-1ebe8.appspot.com",
  messagingSenderId: "990222835991",
  appId: "1:990222835991:web:41f183743b4e31b8829752",
  measurementId: "G-KTKRG81JDY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
