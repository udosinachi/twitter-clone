import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDW4JnxEH8WM1yhGKGNqU-xFG2UvAoz40U',
  authDomain: 'twitter-clone-d787e.firebaseapp.com',
  projectId: 'twitter-clone-d787e',
  storageBucket: 'twitter-clone-d787e.appspot.com',
  messagingSenderId: '1020806254074',
  appId: '1:1020806254074:web:16976e80023ac2d14aa843',
  measurementId: 'G-4YFMCQ5BSE',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
