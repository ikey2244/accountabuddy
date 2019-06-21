import { FIREBASE_API_KEY } from 'react-native-dotenv';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'accountabuddy-134b8.firebaseapp.com',
  databaseURL: 'https://accountabuddy-134b8.firebaseio.com',
  projectId: 'accountabuddy-134b8',
  storageBucket: 'accountabuddy-134b8.appspot.com',
  messagingSenderId: '888670357488',
  appId: '1:888670357488:web:76cb048ae97457c8',
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
