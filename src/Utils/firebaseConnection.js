import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBK0u06fUG-8sCCH4cQmF2Z-xTl9GSFPYM",
  authDomain: "fb-crud-react-514b9.firebaseapp.com",
  projectId: "fb-crud-react-514b9",
  storageBucket: "fb-crud-react-514b9.appspot.com",
  messagingSenderId: "103731546641",
  appId: "1:103731546641:web:e47f6adb9696f5a6e0bfb0"
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;