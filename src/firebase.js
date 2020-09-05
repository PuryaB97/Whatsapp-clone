import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFLnzo1JCGrxdymXHGaREn5002TgWxftI",
  authDomain: "whatsapp-clone-b4051.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-b4051.firebaseio.com",
  projectId: "whatsapp-clone-b4051",
  storageBucket: "whatsapp-clone-b4051.appspot.com",
  messagingSenderId: "594859209090",
  appId: "1:594859209090:web:ab7fef2ee23b3848b15f9b",
  measurementId: "G-7YRJS539H9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
