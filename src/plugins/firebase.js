import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRqehA2DSfntEBPoStYoukeTR8T2a0sZY",
  authDomain: "c3-officialsite.firebaseapp.com",
  databaseURL: "https://c3-officialsite.firebaseio.com",
  projectId: "c3-officialsite",
  storageBucket: "c3-officialsite.appspot.com",
  messagingSenderId: "1054658532963",
  appId: "1:1054658532963:web:4ea6ccd87cb94615184a56",
  measurementId: "G-S3HT2Z6MX7"
});

export default firebase
export const Newsdb = firebaseApp.firestore().collection('news');
