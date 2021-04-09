import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAT1bzyeO3h8HfviFbabCYSP3loguhtlO0",
    authDomain: "fir-9c63f.firebaseapp.com",
    projectId: "fir-9c63f",
    storageBucket: "fir-9c63f.appspot.com",
    messagingSenderId: "819934373367",
    appId: "1:819934373367:web:080b17e73fe3e9ca63faf2",
    measurementId: "G-E7MCR2SWGC"
};

const firebase = Firebase.initializeApp(config);
export default firebase;