import React, { createContext, FC, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from 'src/Firebase/Firebase'
import { Navigate } from "react-router-dom"

interface Props {
    login(user: any): void
    register(user: any): any
    signInWithGoogle(user: any): void
    user?: any
    signed?: boolean
    loginEmail: string
    setLoginEmail(email: string): void
    loginPasswd: string
    setLoginPasswd(passwd: string): void
    registerEmail: string
    setRegisterEmail(email: string): void
    registerPasswd: string
    setRegisterPasswd(passwd: string): void

}

export const FireContext = createContext<Props>({
    login: () => { },
    register: () => { },
    signInWithGoogle: () => { },
    user: [],
    loginEmail: "",
    setLoginEmail: () => { },
    loginPasswd: "",
    setLoginPasswd: () => { },
    registerEmail: "",
    setRegisterEmail: () => { },
    registerPasswd: "",
    setRegisterPasswd: () => { },
})

const FireProvider: FC = ({ children }) => {

    const [user, setUser] = useState<any>(null)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPasswd, setLoginPasswd] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPasswd, setRegisterPasswd] = useState("")


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
    })

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPasswd)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPasswd)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }

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
            signed: !!user,
            user,
            loginEmail,
            setLoginEmail,
            loginPasswd,
            setLoginPasswd,
            registerEmail,
            setRegisterEmail,
            registerPasswd,
            setRegisterPasswd,
            register,
            login,
        }}>
            {children}
        </FireContext.Provider>
    )
}

export default FireProvider