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

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.fire = firebase
    this.database = this.fire.database()
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off()
  }

  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then((snapshot) => snapshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database
      .ref(`pokemons/${key}`)
      .set(pokemon)
      .then((v) => console.log('ok: v'))
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key
    this.database
      .ref('pokemons/' + newKey)
      .set(data)
      .then(() => cb())
  }
}

export default new Firebase()
