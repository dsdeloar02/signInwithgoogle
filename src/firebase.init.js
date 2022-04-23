// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW2jC_nGQEjl8dsgjf8eMW5Jr-x4Iu-I4",
  authDomain: "ema-jhon-shop-57dd6.firebaseapp.com",
  projectId: "ema-jhon-shop-57dd6",
  storageBucket: "ema-jhon-shop-57dd6.appspot.com",
  messagingSenderId: "1005145363770",
  appId: "1:1005145363770:web:745c35360ab1dbce4d6c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;