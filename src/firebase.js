import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeYMSC2dI_FaZAk08aVHeIawJuMDVYaxM",
  authDomain: "e-clone-491df.firebaseapp.com",
  databaseURL: "https://e-clone-491df.firebaseio.com",
  projectId: "e-clone-491df",
  storageBucket: "e-clone-491df.appspot.com",
  messagingSenderId: "546494555652",
  appId: "1:546494555652:web:a894577f7a3c5308f2f751",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };