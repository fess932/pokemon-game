import { useState } from 'react'

import GoHome from '../../components/GoHome'
import PokemonCard from '../../components/PokemonCard'

import POKEMONS from '../../assets/pokemonsData.json'
import s from './style.module.css'

const GamePage = () => {
  const [cards, mutateCards] = useState(() =>
    POKEMONS.map((pokemon) => ({
      isActive: false,
      ...pokemon,
    }))
  )

  const revertPokemon = (id) => {
    mutateCards((prevState) => {
      const [cur] = prevState.filter((item) => item.id === id)
      cur.isActive = !cur.isActive
      return [...prevState]
    })
  }

  return (
    <div className="root">
      <GoHome />

      <h3 className={s.title}>This is Game Page!</h3>

      <div className={s.flex}>
        {cards.map((item) => (
          <PokemonCard
            name={item.name}
            id={item.id}
            values={item.values}
            img={item.img}
            type={item.type}
            key={item.id}
            isActive={item.isActive}
            revertPokemon={revertPokemon}
          />
        ))}
      </div>
    </div>
  )
}

export default GamePage
