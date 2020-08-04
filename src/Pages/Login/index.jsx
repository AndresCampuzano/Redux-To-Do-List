import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleLoginAction } from '../../actions'

import { firebaseConfig, githubAuthProvider } from '../../utils/firebase'

const Login = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector((state) => state.isLogged)
    console.log('isLogged: ', isLogged)

    const handleLoginWithGithub = () => {
        firebaseConfig
            .auth()
            .signInWithPopup(githubAuthProvider)
            .then((response) => {
                console.log(response)
                dispatch(handleLoginAction(true))
            })
            .catch((error) => console.log(error))
    }
    const handleLogOutWithGithub = () => {
        firebaseConfig
            .auth()
            .signOut()
            .then(() => {
                dispatch(handleLoginAction(false))
            })
            .catch((error) => console.log(error))
    }
    return (
        <>
            <h1>Log in / Sign in with Github</h1>
            <button type="button" onClick={handleLoginWithGithub}>
                SIGN IN
            </button>
            <button type="button" onClick={handleLogOutWithGithub}>
                SIGN OUT
            </button>
        </>
    )
}

export default Login
