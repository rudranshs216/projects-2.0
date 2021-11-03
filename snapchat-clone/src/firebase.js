import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1WqHoVgCnqefVXnsqV1Xgu0bIZ22aZPs",
    authDomain: "snapchat-clone-f1fe4.firebaseapp.com",
    projectId: "snapchat-clone-f1fe4",
    storageBucket: "snapchat-clone-f1fe4.appspot.com",
    messagingSenderId: "645573215946",
    appId: "1:645573215946:web:37b8099df41e628d8a5633"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage, provider}
