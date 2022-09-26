// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKJPR3HgQTdi4XLYQri8zqpBZQpyd4UFk",
  authDomain: "ntg-reactjs.firebaseapp.com",
  projectId: "ntg-reactjs",
  storageBucket: "ntg-reactjs.appspot.com",
  messagingSenderId: "823855121619",
  appId: "1:823855121619:web:e257e1423d7e64df980026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);