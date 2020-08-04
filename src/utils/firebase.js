import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmkxumiSrhh4vWDM6wLJkulf9dTOPvTsE',
  authDomain: 'to-do-list-react-51533.firebaseapp.com',
  databaseURL: 'https://to-do-list-react-51533.firebaseio.com',
  projectId: 'to-do-list-react-51533',
  storageBucket: 'to-do-list-react-51533.appspot.com',
  messagingSenderId: '630318878884',
  appId: '1:630318878884:web:47f4edddd22992b45e5631',
  measurementId: 'G-7M1E7M5QNT'
};
// Initialize Firebase
const firebaseConfig = firebase.initializeApp(config);
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
firebase.analytics();

export { firebaseConfig, githubAuthProvider };
