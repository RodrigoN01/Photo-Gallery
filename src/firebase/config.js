import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBzyw0TRmZPka3M5XBuXxiS23UKSM_lN9Q',
  authDomain: 'firegram-4e42c.firebaseapp.com',
  projectId: 'firegram-4e42c',
  storageBucket: 'firegram-4e42c.appspot.com',
  messagingSenderId: '409333051737',
  appId: '1:409333051737:web:3fd6a1552898647f651c48',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
