import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDdhvWIcsu96BVym9kN8vaTh0wcFFpHh28",
    authDomain: "vue-digital-startup.firebaseapp.com",
    databaseURL: "https://vue-digital-startup.firebaseio.com",
    projectId: "vue-digital-startup",
    storageBucket: "vue-digital-startup.appspot.com",
    messagingSenderId: "1079670155920",
    appId: "1:1079670155920:web:4cdc2dd1d7b9dc76c4c615"
  })
  .firestore();

export const songRef = db.collection("songs");