import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCr6as0ieF0m9gXabFRC3ANiTY0G1_GHtk",
  authDomain: "crwn-db-e86e7.firebaseapp.com",
  databaseURL: "https://crwn-db-e86e7.firebaseio.com",
  projectId: "crwn-db-e86e7",
  storageBucket: "crwn-db-e86e7.appspot.com",
  messagingSenderId: "887686867026",
  appId: "1:887686867026:web:80972ffb9ca1290ff0978b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
