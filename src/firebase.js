// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7qcbm0v1k3PpnHYUV0bVr5xmD7nNOTY",
  authDomain: "realtor-clone-react-67f09.firebaseapp.com",
  projectId: "realtor-clone-react-67f09",
  storageBucket: "realtor-clone-react-67f09.appspot.com",
  messagingSenderId: "980582890865",
  appId: "1:980582890865:web:ffdb90cb97cc282f0a4ad0",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();
