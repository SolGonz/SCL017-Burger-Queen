import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCL1PDqeHH_B70jbFt0NvcESkBegJIDrp4",
    authDomain: "bobbi-tea.firebaseapp.com",
    projectId: "bobbi-tea",
    storageBucket: "bobbi-tea.appspot.com",
    messagingSenderId: "46233008056",
    appId: "1:46233008056:web:2c671cbd169bd1fc10c14d"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 export {firebase, db}