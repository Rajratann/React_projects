import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaiJOt2LTsP6TTMPWQp3VaQUKZ1yBW5_Y",
  authDomain: "login-signup-5ceba.firebaseapp.com",
  projectId: "login-signup-5ceba",
  storageBucket: "login-signup-5ceba.appspot.com",
  messagingSenderId: "93706663944",
  appId: "1:93706663944:web:682ca823b64b592a9479bd",
  measurementId: "G-KYJHKJH4WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth};
