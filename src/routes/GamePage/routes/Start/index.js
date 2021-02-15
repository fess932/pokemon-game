import { useContext, useEffect, useState } from 'react'

import { PokemonContext } from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'

import s from './style.module.css'
import { FireBaseContex } from '../../../../context/firebaseContext'
import { useHistory } from 'react-router-dom'

const StartPage = () => {
  const firebase = useContext(FireBaseContex)
  const pokemonContext = useContext(PokemonContext)
  const History = useHistory()

  const [pokemons, setPokemons] = useState({})
  const [gameReady, setGameReady] = useState(false)

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      console.log('### update pokemons from websoket')
      setPokemons(pokemons)
    })
    return () => firebase.offPokemonSoket()
  }, [firebase])
  useEffect(() => {
    console.log('### update pokemons', pokemons)
  }, [pokemons])

  const handleSelectPokemon = (id) => {
    setPokemons((prevState) => {
      let selected = 0

      const poks = Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        if (pokemon.id === id) {
          pokemon.isSelected = !pokemon.isSelected
        }
        if (pokemon.isSelected) {
          selected++
        }
        acc[item[0]] = pokemon
        return acc
      }, {})

      console.log('selected:', selected)
      if (selected < 5) {
        setGameReady(false)
      }
      if (selected === 5) {
        setGameReady(true)
      }

      return poks
    })
  }

  const handleStartGame = () => {
    pokemonContext.updateSelectedPokemons(
      Object.fromEntries(
        Object.entries(pokemons).filter(([key, pok]) => {
          console.log(pok)
          return pok.isSelected === true
        })
      )
    )
    History.push('/game/board')
  }

  return (
    <>
      <h1 className={s.title}>This is start game page</h1>
      <div className={s.buttonWrap}>
        <button onClick={handleStartGame} disabled={!gameReady}>
          Start game
        </button>
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
