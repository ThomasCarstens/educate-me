// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getApp, getApps, initializeApp } from "firebase/app";
import { browserLocalPersistence, browserSessionPersistence, getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPSdB4UCecFGGoAwggKuM0aUjKuLXTgis",
  authDomain: "fir-auth-31f82.firebaseapp.com",
  projectId: "fir-auth-31f82",
  storageBucket: "fir-auth-31f82.appspot.com",
  messagingSenderId: "759808068250",
  appId: "1:759808068250:web:31847fbc6bc1455853ed23"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = getAuth(app);


// const auth = firebase.auth()
const storage = getStorage(app);
const database = getDatabase();
export { auth, storage, database };