import { auth, googleProvider } from "@/lib";
import { addUserToFirestore } from "@/lib/userController";
import { signInWithPopup } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const handleSignIn = (router : AppRouterInstance) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("result",result)
        const user = result?.user
        addUserToFirestore(user)
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };