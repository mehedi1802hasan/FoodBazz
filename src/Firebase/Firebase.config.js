// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfonIRI6P9qKp7boH0thYxnBW5LKoi3cM",
  authDomain: "foodbazz-99c0a.firebaseapp.com",
  projectId: "foodbazz-99c0a",
  storageBucket: "foodbazz-99c0a.appspot.com",
  messagingSenderId: "343312189291",
  appId: "1:343312189291:web:5d5f89fdd2d0acb5b5ae2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;