// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-GvTUIdn_cATOxie1mwmghF4zaYL6vBc",
  authDomain: "insta-504be.firebaseapp.com",
  projectId: "insta-504be",
  storageBucket: "insta-504be.appspot.com",
  messagingSenderId: "962848403019",
  appId: "1:962848403019:web:961e3503335886dcb0a7ce",
  measurementId: "G-6FQ23Y1QQW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}
