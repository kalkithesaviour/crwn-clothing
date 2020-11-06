import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzFwFKSZ9sqwaG41f-oJ2FiHGXuAKRkZM",
    authDomain: "crwn-clothing-400c3.firebaseapp.com",
    databaseURL: "https://crwn-clothing-400c3.firebaseio.com",
    projectId: "crwn-clothing-400c3",
    storageBucket: "crwn-clothing-400c3.appspot.com",
    messagingSenderId: "202317664991",
    appId: "1:202317664991:web:8e1df8db185d8ceb8c4f6a",
    measurementId: "G-8H77T4VPLH"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
