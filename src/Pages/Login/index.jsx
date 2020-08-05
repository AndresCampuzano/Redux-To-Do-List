import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLoginAction } from '../../actions'
import { navigate } from '@reach/router'

import { firebaseConfig, googleAuthProvider } from '../../utils/firebase'

const Login = () => {
    const dispatch = useDispatch()

    // const handleLoginWithGithub = () => {
    //     firebaseConfig
    //         .auth()
    //         .signInWithPopup(githubAuthProvider)
    //         .then((response) => {
    //             console.log(response)
    //             dispatch(handleLoginAction(response))
    //             navigate('/list')
    //         })
    //         .catch((error) => console.log(error))
    // }
    const handleLoginWithGoogle = () => {
        firebaseConfig
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((response) => {
                console.log(response)
                dispatch(handleLoginAction(response))
                navigate('/list')
            })
            .catch((error) => console.log(error))
    }
    const handleLogOut = () => {
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
            {/* <button type="button" onClick={handleLoginWithGithub}>
                SIGN IN GITHUB
            </button> */}
            <button type="button" onClick={handleLoginWithGoogle}>
                SIGN IN GOOGLE
            </button>
            <button type="button" onClick={handleLogOut}>
                SIGN OUT
            </button>
        </>
    )
}

export default Login
