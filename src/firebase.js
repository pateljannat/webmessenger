import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCs6DnUtrauk98dQ2KeSy0mNkHUo3kBo0A",
    authDomain: "web-messenger-app.firebaseapp.com",
    databaseURL: "https://web-messenger-app.firebaseio.com",
    projectId: "web-messenger-app",
    storageBucket: "web-messenger-app.appspot.com",
    messagingSenderId: "910447383697",
    appId: "1:910447383697:web:c583e9f2432d8bca459b30",
    measurementId: "G-GP9TZZB17R"
})

const db = firebaseApp.firestore();

export default db;