import React, { createContext, FC, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from 'src/Firebase/Firebase'
import { navigate } from "gatsby"
import * as Yup from 'yup'


interface Props {
    onSubmitLogin(user: any): void
    signInWithGoogle(user: any): void
    user?: {}
    onSubmitRegister(e: any): void
    validateSchemaRegister: any
    logout(sign: any): void
    validateSchemaLogin: any
    keepconnected: boolean
    setKeepConnected(res: boolean): void
    inRegister: boolean
    setInRegister(e: boolean): void

}

export const FireContext = createContext<Props>({
    onSubmitLogin: () => { },
    signInWithGoogle: () => { },
    user: {},
    onSubmitRegister: () => { },
    validateSchemaRegister: {},
    logout: () => { },
    validateSchemaLogin: () => { },
    keepconnected: false,
    setKeepConnected: () => { },
    inRegister: false,
    setInRegister: () => { },
})

const FireProvider: FC = ({ children }) => {

    const [user, setUser] = useState<any>({})
    const [keepconnected, setKeepConnected] = useState(false)
    const [inRegister, setInRegister] = useState(false)

    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).
            then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential?.accessToken
                const user = res.user
                setUser(user)
                if (keepconnected) {
                    sessionStorage.setItem("@AuthFirebase:token", token!)
                    sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                }
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

    const onSubmitLogin = async (values: any) => {

        await signInWithEmailAndPassword(auth, values.loginEmail, values.loginPasswd).
            then((user) => {
                navigate("/")
                console.log(user)
            }).
            catch(
                (error) => {
                    console.log(error.message)
                }
            )
    }

    const onSubmitRegister = async (values: any) => {
        await createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPasswd).
            then(() => {
                navigate("/")
            }).
            catch(
                () => {
                    setInRegister(true)
                }
            )
    }

    const validateSchemaRegister = Yup.object().shape({
        registerEmail: Yup.string().email("Por favor, insira um endereço de e-mail válido").required("Por favor, insira um endereço de e-mail válido"),
        registerPasswd: Yup.string().min(8).required("Por favor, insira uma senha"),

    });
    const validateSchemaLogin = Yup.object().shape({
        loginEmail: Yup.string().email().required("Por favor, insira um endereço de e-mail válido"),
        loginPasswd: Yup.string().min(8).required("Por favor, insira uma senha"),

    });

    const logout = async () => {
        await signOut(auth).
            then(() => {
                navigate("/")
            }).
            catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        console.log(window.location.pathname)
        loadStoreAuth()
    }, [])

    return (
        <FireContext.Provider value={{
            signInWithGoogle,
            user,
            onSubmitLogin,
            onSubmitRegister,
            validateSchemaRegister,
            logout,
            validateSchemaLogin,
            keepconnected,
            setKeepConnected,
            inRegister,
            setInRegister,
        }}>
            {children}
        </FireContext.Provider>
    )
}

export default FireProvider