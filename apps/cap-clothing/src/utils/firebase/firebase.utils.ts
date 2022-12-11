import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD1wmDRmREONG-n_0zZcFK7jMYcQHF0Mz0',
  authDomain: 'cap-clothing.firebaseapp.com',
  projectId: 'cap-clothing',
  storageBucket: 'cap-clothing.appspot.com',
  messagingSenderId: '124811611928',
  appId: '1:124811611928:web:92e1498b4fcd5e2a9b986d',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    console.debug(photoURL);
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return userRef;
}