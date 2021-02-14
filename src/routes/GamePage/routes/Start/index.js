import { useContext, useEffect, useState } from 'react'

import { PokemonContext } from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'

import s from './style.module.css'

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
    <>
      <h1 className={s.title}>This is start game page</h1>
      <div className={s.buttonWrap}>
        <button onClick={handleStartGame}>Start game</button>
      </div>

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
    </>
  )
}

export default StartPage
