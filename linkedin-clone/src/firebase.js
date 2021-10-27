import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAL5Gk-AXElbczWP_QmeDpiuHTBqlkmjAQ",
    authDomain: "linkedin-clone-rs.firebaseapp.com",
    projectId: "linkedin-clone-rs",
    storageBucket: "linkedin-clone-rs.appspot.com",
    messagingSenderId: "581764555221",
    appId: "1:581764555221:web:73d80296292f677ebc5d5c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};