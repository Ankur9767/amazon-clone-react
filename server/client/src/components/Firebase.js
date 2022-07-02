import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBr2z7Rm-IhCPb5hIkwAHOj1arP6hNrL7I",
  authDomain: "clone-93a2a.firebaseapp.com",
  projectId: "clone-93a2a",
  storageBucket: "clone-93a2a.appspot.com",
  messagingSenderId: "580351618486",
  appId: "1:580351618486:web:aeeae2e34d9b4c69382517",
  measurementId: "G-JPN4B744T2"
})


const auth=firebase.auth();

export default auth;