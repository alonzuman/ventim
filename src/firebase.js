import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCeHxwE6aRJCE5Ld5JI9rfDc3OZz2E0X1Q",
  authDomain: "ventim-fd3c6.firebaseapp.com",
  projectId: "ventim-fd3c6",
  storageBucket: "ventim-fd3c6.appspot.com",
  messagingSenderId: "1027346281598",
  appId: "1:1027346281598:web:d4abb2001d7357a023142f",
  measurementId: "G-3XEPHQCM8M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
