import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbtpPPULfpb2T8JNKJXR5hUnt0EkcU8Vw",
  authDomain: "netflix-build-5c5db.firebaseapp.com",
  projectId: "netflix-build-5c5db",
  storageBucket: "netflix-build-5c5db.appspot.com",
  messagingSenderId: "960313803705",
  appId: "1:960313803705:web:6255b4299ad7dd2b34ac68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
