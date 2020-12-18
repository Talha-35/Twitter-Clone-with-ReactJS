import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "twitter-clone-with-react-273d4.firebaseapp.com",
    projectId: "twitter-clone-with-react-273d4",
    storageBucket: "twitter-clone-with-react-273d4.appspot.com",
    messagingSenderId: "861073922553",
    appId: "1:861073922553:web:4e27b2b4b7a7a83ff54528",
    measurementId: "G-2R26ZF28XQ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

