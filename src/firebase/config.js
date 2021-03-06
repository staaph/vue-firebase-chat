import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,

  authDomain: import.meta.env.VITE_authDomain,

  projectId: import.meta.env.VITE_projectId,

  storageBucket: import.meta.env.VITE_storageBucket,

  messagingSenderId: import.meta.env.VITE_messagingSenderId,

  appId: import.meta.env.VITE_appId,
};

//init firebase

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
