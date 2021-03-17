import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6rWGvcZaBI5lDNmurGHgdAPhicYFvuNc",
    authDomain: "project-mao-na-roda.firebaseapp.com",
    projectId: "project-mao-na-roda",
    storageBucket: "project-mao-na-roda.appspot.com",
    messagingSenderId: "192690769485",
    appId: "1:192690769485:web:3a2af7f50fd851360a5604"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

