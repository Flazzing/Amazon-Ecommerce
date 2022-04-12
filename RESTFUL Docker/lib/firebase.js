import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAQeYTEBhYj05luB-JqkzvGEZKUW4KgtJw",
  authDomain: "clone-67125.firebaseapp.com",
  projectId: "clone-67125",
  storageBucket: "clone-67125.appspot.com",
  messagingSenderId: "246992091572",
  appId: "1:246992091572:web:fed57029e3507e731ddae1",
  measurementId: "G-4ZHBCGMQ1L",
};

const firebase = Firebase.initializeApp(config);
export default firebase;
