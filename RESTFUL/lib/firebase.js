import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "",
    authDomain: "fir-9c63f.firebaseapp.com",
    projectId: "fir-9c63f",
    storageBucket: "fir-9c63f.appspot.com",
    messagingSenderId: "819934373367",
    appId: "",
    measurementId: "G-E7MCR2SWGC"
};

const firebase = Firebase.initializeApp(config);
export default firebase;