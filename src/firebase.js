import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbsryu-rZ7K5NXAc4uF_gkloMXbZNEKco',
  authDomain: 'react-hooks-blog.firebaseapp.com',
  projectId: 'react-hooks-blog',
  storageBucket: 'react-hooks-blog.appspot.com',
  messagingSenderId: '610536486659',
  appId: '1:610536486659:web:9d0505f5992db8ddbbdb36',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
