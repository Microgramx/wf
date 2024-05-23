import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA4BrhBJdOBnksVnoYlLRd3kzyukvJIULw",
    authDomain: "hdscreen-b299a.firebaseapp.com",
    projectId: "hdscreen-b299a",
    storageBucket: "hdscreen-b299a.appspot.com",
    messagingSenderId: "548970071246",
    appId: "1:548970071246:web:1e026b0bae867edec9bc9f",
    measurementId: "G-NC6473VX1R"
};

const firebaseApp = firebase.initializeApp(config);

// Initialize the Firestore database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;