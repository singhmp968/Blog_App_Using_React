import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAOck9ct1y2EKr6hOKNCuEysVkGSwktHVY',
  authDomain: 'react-hooks-blog-ada5b.firebaseapp.com',
  projectId: 'react-hooks-blog-ada5b',
  storageBucket: 'react-hooks-blog-ada5b.appspot.com',
  messagingSenderId: '1060034868141',
  appId: '1:1060034868141:web:75e1aca1bfa5900e516724',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
