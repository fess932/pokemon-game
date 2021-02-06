import { useState, useEffect } from 'react'

import GoHome from '../../components/GoHome'
import PokemonCard from '../../components/PokemonCard'

import database from '../../service/firebase'

import s from './style.module.css'

function createNewPoke() {
  return {
    abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
    base_experience: 122,
    height: 11,
    id: 17,
    img:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    name: 'pidgeotto',
    stats: {
      attack: 60,
      defense: 55,
      hp: 63,
      'special-attack': 50,
      'special-defense': 50,
      speed: 71,
    },
    type: 'flying',
    values: {
      bottom: 7,
      left: 5,
      right: 2,
      top: 'A',
    },
  }
}

const GamePage = () => {
  const [cards, mutateCards] = useState({})

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      mutateCards(snapshot.val())
    })
  }, [cards])

  const addNewPokemonHandle = () => {
    const newPoke = database.ref('pokemons').push({ ...createNewPoke() })
    console.log(newPoke.key)
  }

  const revertPokemon = (uid) => {
    mutateCards((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (item[0] === uid) {
          pokemon.isActive = !pokemon.isActive
          database.ref('pokemons/' + item[0]).set({ ...pokemon })
        }

        acc[item[0]] = pokemon

        return acc
      }, {})
    })
  }

  return (
    <div className="root">
      <GoHome />

      <h3 className={s.title}>This is Game Page!</h3>

      <button className={s.btn} onClick={addNewPokemonHandle}>
        Add new pokemon!
      </button>

      <div className={s.flex}>
        {Object.entries(cards).map(
          ([uid, { name, id, values, img, type, isActive }]) => (
            <PokemonCard
              name={name}
              id={id}
              uid={uid}
              values={values}
              img={img}
              type={type}
              key={uid}
              isActive={isActive}
              revertPokemon={revertPokemon}
            />
          )
        )}
      </div>
    </div>
  )
}

export default GamePage
