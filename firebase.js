// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgNbAUefpylStJh_W5zbvlIviNPrumhN8",
  authDomain: "new-insta-clone-bb71f.firebaseapp.com",
  projectId: "new-insta-clone-bb71f",
  storageBucket: "new-insta-clone-bb71f.appspot.com",
  messagingSenderId: "733680795344",
  appId: "1:733680795344:web:99bb340a510a441ec268d5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};