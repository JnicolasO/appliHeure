import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyANolKAKgKW5s81CdraZhefJiI3-9dbplM",

  authDomain: "heures-96610.firebaseapp.com",

  projectId: "heures-96610",

  storageBucket: "heures-96610.appspot.com",

  messagingSenderId: "149167085617",

  appId: "1:149167085617:web:7d3bb0492a83c38868dd10"


});

export const db = getFirestore();
export default app;
