import firebase from 'firebase/compat/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDfR4BfhIKVqyH7frDhJoeSLtJPMdgGsP8",
  authDomain: "crwn-db-eb563.firebaseapp.com",
  projectId: "crwn-db-eb563",
  storageBucket: "crwn-db-eb563.appspot.com",
  messagingSenderId: "403690498500",
  appId: "1:403690498500:web:85d3b6540145a02f329c91"
};

firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;