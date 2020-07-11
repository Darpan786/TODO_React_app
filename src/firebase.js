import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3mNai1hgz1A2qpuf-Fl8H7xQbIaKAgQ8",
  authDomain: "todo-app-cp-b4aae.firebaseapp.com",
  databaseURL: "https://todo-app-cp-b4aae.firebaseio.com",
  projectId: "todo-app-cp-b4aae",
  storageBucket: "todo-app-cp-b4aae.appspot.com",
  messagingSenderId: "454885896136",
  appId: "1:454885896136:web:c6e5db5a78bf9f4e5d1afd",
  measurementId: "G-4D77R488JC",
});
const db = firebaseApp.firestore();

export default db;
