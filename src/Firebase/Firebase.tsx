import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDfbXMvkM7_zdf-w8HacTpVp_PmCozdIEk",
    authDomain: "faststore-81663.firebaseapp.com",
    projectId: "faststore-81663",
    storageBucket: "faststore-81663.appspot.com",
    messagingSenderId: "665336196764",
    appId: "1:665336196764:web:762b117c9f2421090d8759"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).
        then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res)
            const token = credential?.accessToken
            const user = res.user
            console.log(user)
        }).
        catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
}