import React, { createContext, FC, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from 'src/Firebase/Firebase'
import * as Yup from 'yup'


interface Props {
    onSubmitLogin(user: any): void
    signInWithGoogle(user: any): void
    user?: any
    loginEmail: string
    setLoginEmail(email: string): void
    loginPasswd: string
    setLoginPasswd(passwd: string): void
    onSubmitRegister(e: any): void
    validateSchema: any
    isLogged(validate: any): void
    logout(sign: any): void
}

export const FireContext = createContext<Props>({
    onSubmitLogin: () => { },
    signInWithGoogle: () => { },
    user: [],
    loginEmail: "",
    setLoginEmail: () => { },
    loginPasswd: "",
    setLoginPasswd: () => { },
    onSubmitRegister: () => { },
    validateSchema: () => { },
    isLogged: () => { },
    logout: () => { },
})

const FireProvider: FC = ({ children }) => {

    const [user, setUser] = useState<any>(null)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPasswd, setLoginPasswd] = useState("")

    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).
            then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential?.accessToken
                const user = res.user
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token!)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
            }).
            catch((error) => {
                //const errorCode = error.code
                //const errorMessage = error.message
                // const email = error.email
                // const credential = GoogleAuthProvider.credentialFromError(error)
                console.log(error)
            })
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log(currentUser)
    })

    const onSubmitLogin = async (values: any) => {
        try {
            const user = await signInWithEmailAndPassword(auth, values.loginEmail, values.loginPasswd)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitRegister = async (values: any) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPasswd)
            console.log(user)


        } catch (error) {
            console.log(error)
        }
    }

    const validateSchema = Yup.object().shape({
        registerEmail: Yup.string().email().required(),
        registerPasswd: Yup.string().min(8).required(),
        loginEmail: Yup.string().email().required(),
        loginPasswd: Yup.string().min(8).required(),

    });

    const isLogged = () => {
        if (user) {
            window.location.href = "/"
        } else {
            window.location.href = "/register"
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStoreAuth()
    }, [])

    return (
        <FireContext.Provider value={{
            signInWithGoogle,
            user,
            loginEmail,
            setLoginEmail,
            loginPasswd,
            setLoginPasswd,
            onSubmitLogin,
            onSubmitRegister,
            validateSchema,
            isLogged,
            logout,
        }}>
            {children}
        </FireContext.Provider>
    )
}

export default FireProvider