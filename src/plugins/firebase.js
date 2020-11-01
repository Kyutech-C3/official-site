import firebase from 'firebase/app';
import 'firebase/firestore';

console.log(process.env.VUE_APP_apiKey);
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appIdappId,
  measurementId: process.env.VUE_APP_measurementId,
});

export default firebase
export const Newsdb = firebaseApp.firestore().collection('news');
