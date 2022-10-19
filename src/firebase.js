import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Jq-4FAWgxEY4Srl_0DygagLu3MKEU6Q",
  authDomain: "clonelogin-37994.firebaseapp.com",
  projectId: "clonelogin-37994",
  storageBucket: "clonelogin-37994.appspot.com",
  messagingSenderId: "87779682825",
  appId: "1:87779682825:web:cb9686bfc5328b2fde26d8",
  measurementId: "G-83GRD2YLCH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
