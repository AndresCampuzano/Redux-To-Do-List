import React from 'react';
import { firebaseConfig, githubAuthProvider } from '../../utils/firebase';

const Login = () => {
  const handleLoginWithGithub = () => {
    firebaseConfig
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  return (
    <>
      <h1>Log in / Sign in with Github</h1>
      <button type='button' onClick={handleLoginWithGithub}>
        Github
      </button>
    </>
  );
};

export default Login;
