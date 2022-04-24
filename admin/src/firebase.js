import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpvsccUi3aCI7uMzqd2RCriE2NOBD5S6k",
  authDomain: "netflix-9067a.firebaseapp.com",
  projectId: "netflix-9067a",
  storageBucket: "netflix-9067a.appspot.com",
  messagingSenderId: "1045853902010",
  appId: "1:1045853902010:web:dbdf4a319696d945c2de83",
  measurementId: "G-2WVDJ1QKDZ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
