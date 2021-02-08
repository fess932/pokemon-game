import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAW6lNb0Homdoykhd-4U74oASbV32zCBWY',
  authDomain: 'pokemon-game-a95b5.firebaseapp.com',
  databaseURL: 'https://pokemon-game-a95b5-default-rtdb.firebaseio.com',
  projectId: 'pokemon-game-a95b5',
  storageBucket: 'pokemon-game-a95b5.appspot.com',
  messagingSenderId: '697366951497',
  appId: '1:697366951497:web:a09343ac375533eea3b198',
}

firebase.initializeApp(firebaseConfig)

export const fire = firebase
export const database = firebase.database()

export default database
