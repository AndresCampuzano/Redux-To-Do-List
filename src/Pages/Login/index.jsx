import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLoginAction } from '../../actions'
import { navigate } from '@reach/router'

import { firebaseConfig, githubAuthProvider } from '../../utils/firebase'

const Login = () => {
    const dispatch = useDispatch()

    const handleLoginWithGithub = () => {
        firebaseConfig
            .auth()
            .signInWithPopup(githubAuthProvider)
            .then((response) => {
                console.log(response)
                dispatch(handleLoginAction(true))
                navigate('/list')
            })
            .catch((error) => console.log(error))
    }
    const handleLogOutWithGithub = () => {
        firebaseConfig
            .auth()
            .signOut()
            .then(() => {
                dispatch(handleLoginAction(false))
                navigate('/')
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
