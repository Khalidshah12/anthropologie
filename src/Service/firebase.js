import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpYvWqAVUvC7pdqbVEpc1jZeFfxtVVi0g",
  authDomain: "phone-auth-71712.firebaseapp.com",
  projectId: "phone-auth-71712",
  storageBucket: "phone-auth-71712.appspot.com",
  messagingSenderId: "540390998807",
  appId: "1:540390998807:web:af0edac160e957a3226d52",
};

// initialize app
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
