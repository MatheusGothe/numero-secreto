import { User } from "firebase/auth";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { firestoreApp } from ".";

export const firestore = getFirestore(firestoreApp)

export const addUserToFirestore = async(user: User) => {

    // if user already exists on firestore, update the last seen to now
    // if user does not exists in firestore, add user to firestore

    const userRef = doc(firestore,"users", user.uid)
    await setDoc(userRef,{
        uid : user.uid,
        name : user.displayName,
        email: user.email,
        photo : user.photoURL,
        lastOnline: serverTimestamp()
    },
     { merge: true}
    )
    
}