import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDjATMIS47XzeaekVx4pduUuD0BXgLj2o0',
  authDomain: 'pokemon-game-2.firebaseapp.com',
  databaseURL:
    'https://pokemon-game-2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pokemon-game-2',
  storageBucket: 'pokemon-game-2.appspot.com',
  messagingSenderId: '856235514316',
  appId: '1:856235514316:web:e954bc5e758be760d92569',
}

firebase.initializeApp(firebaseConfig)

export const fire = firebase
export const database = firebase.database()

export default database
