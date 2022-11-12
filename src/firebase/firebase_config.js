// import firebase from 'firebase';
  
// const firebaseConfig = {
//     // Your credentials
//     apiKey: "AIzaSyDpYvWqAVUvC7pdqbVEpc1jZeFfxtVVi0g",
//     authDomain: "phone-auth-71712.firebaseapp.com",
//     projectId: "phone-auth-71712",
//     storageBucket: "phone-auth-71712.appspot.com",
//     messagingSenderId: "540390998807",
//     appId: "1:540390998807:web:af0edac160e957a3226d52"
// };
  
// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
// export {auth , firebase};

import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpYvWqAVUvC7pdqbVEpc1jZeFfxtVVi0g",
    authDomain: "phone-auth-71712.firebaseapp.com",
    projectId: "phone-auth-71712",
    storageBucket: "phone-auth-71712.appspot.com",
    messagingSenderId: "540390998807",
    appId: "1:540390998807:web:af0edac160e957a3226d52"
  //...
};
 const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app); 