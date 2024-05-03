import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, auth } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // The signed-in user info.
      const user = result.user;

      // store data in Users collection
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const signOut = () => {
  auth.signOut();
};

export { signInWithGoogle, signOut };
