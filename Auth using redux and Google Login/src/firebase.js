import firebase from "firebase";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyC-pv-hUAOCAksRsqJdOHCw34R40neOuog",
  authDomain: "quick-backend-dfafa.firebaseapp.com",
  projectId: "quick-backend-dfafa",
  storageBucket: "quick-backend-dfafa.appspot.com",
  messagingSenderId: "923735613761",
  appId: "1:923735613761:web:1c67d59c08f5b214a281c0",
});

const invokeFirestore = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { invokeFirestore, auth, provider };
