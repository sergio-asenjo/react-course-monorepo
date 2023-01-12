import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: User,
  userName?: string
) => {
  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName: displayName ?? userName,
        email,
        photoURL: photoURL ?? `https://avatars.dicebear.com/api/initials/${userName}.svg`,
        createdAt,
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return userRef;
};

export async function createNewUserWithEmailAndPassword(
  email: string,
  password: string
): Promise<UserCredential | null> {
  if (!email || !password) return null;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInAuthUserWithEmailAndPassword(
  email: string,
  password: string
): Promise<UserCredential | null> {
  if (!email || !password) return null;
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutAuthUser(): Promise<void> {
  await signOut(auth);
}

export async function onAuthStateChangedListener(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}

export async function addCollectionAndDocuments(
  collectionKey: string,
  objectsToAdd: any[]): Promise<void>
{
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionReference, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  await batch.commit();

  console.info('Batch commit successful.');
}

export async function getCategoriesAndDocuments() {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoyMap = querySnapshot.docs.reduce(
    (accumulator, doc) => {
      const { title, items } = doc.data();
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {} as { [key: string]: any[] }
  );

  return categoyMap;
}