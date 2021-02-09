import { useContext, useEffect, useState } from 'react'

import { PokemonContext } from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'

import s from './style.module.css'

// const DATA = {
//   abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
//   base_experience: 122,
//   height: 11,
//   id: 17,
//   img:
//     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
//   name: 'pidgeotto',
//   stats: {
//     attack: 60,
//     defense: 55,
//     hp: 63,
//     'special-attack': 50,
//     'special-defense': 50,
//     speed: 71,
//   },
//   type: 'flying',
//   values: {
//     bottom: 7,
//     left: 5,
//     right: 2,
//     top: 'A',
//   },
// }

const StartPage = () => {
  const { firebase, updateSelectedPokemons } = useContext(PokemonContext)

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      console.log('### update pokemons from websoket')
      setPokemons(pokemons)
    })
  }, [firebase])

  useEffect(() => {
    console.log('### update pokemons', pokemons)
  }, [pokemons])

  const handleSelectPokemon = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.isSelected = !pokemon.isSelected
        }
        acc[item[0]] = pokemon
        return acc
      }, {})
    })
  }

  // const handleAddPokemon = () => {
  //   firebase.addPokemon(DATA)
  // }

  const handleStartGame = () => {
    console.log(pokemons)
    const filtered = Object.entries(pokemons).reduce((acc, item) => {
      const pokemon = { ...item[1] }
      if (pokemon.isSelected) {
        acc[item[0]] = pokemon
      }

      return acc
    }, {})

    updateSelectedPokemons(filtered)
  }

  return (
    <div className="root">
      <h1 className={s.title}>This is start game page</h1>
      <button onClick={handleStartGame}>Start game</button>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([uid, { name, id, values, img, type, isSelected }]) => (
            <PokemonCard
              name={name}
              id={id}
              uid={uid}
              values={values}
              img={img}
              type={type}
              key={uid}
              isActive={true}
              isSelected={isSelected}
              clickHandler={handleSelectPokemon}
              className={s.card}
            />
          )
        )}
      </div>
    </div>
  )
}

export default StartPage
