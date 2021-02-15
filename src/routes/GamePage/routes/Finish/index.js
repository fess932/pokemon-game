import s from './style.module.css'
import { useContext, useState } from 'react'
import { PokemonContext } from '../../../../context/pokemonContext'
import cn from 'classnames'
import PokemonCard from '../../../../components/PokemonCard'
import { useHistory } from 'react-router-dom'
import { FireBaseContex } from '../../../../context/firebaseContext'

const FinishPage = () => {
  const firebase = useContext(FireBaseContex)

  const { selectedPokemons, enemyPokemons } = useContext(PokemonContext)
  const [isChoices, setChoices] = useState(null)

  const history = useHistory()
  console.log('selected', selectedPokemons, 'enemy: ', enemyPokemons)
  if (Object.keys(selectedPokemons).length === 0) {
    history.replace('/game')
  }

  const endGameHandle = () => {
    console.log('selected', isChoices)
    firebase.addPokemon(isChoices, () => console.log('pokemon added'))

    history.replace('/game')
  }

  return (
    <>
      <div className={s.root}>
        <div>
          <h1>Player 1</h1>
          <div className={s.cardLine}>
            {Object.entries(selectedPokemons).map(([key, card]) => (
              <div
                onClick={() => {
                  console.log('set select', card.id)
                }}
              >
                <PokemonCard
                  key={card.id}
                  name={card.name}
                  img={card.img}
                  id={card.id}
                  type={card.type}
                  values={card.values}
                  className={s.player1}
                  isActive
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={endGameHandle} className={s.endGame}>
          END GAME
        </button>
        <div>
          <h1>Player 2</h1>
          <div className={s.cardLine}>
            {Object.entries(enemyPokemons).map(([key, card]) => (
              <div
                onClick={() => {
                  setChoices(card)
                }}
                className={cn({
                  [s.choices]: isChoices && isChoices.id === card.id,
                })}
              >
                <PokemonCard
                  key={card.id}
                  name={card.name}
                  img={card.img}
                  id={card.id}
                  type={card.type}
                  values={card.values}
                  className={s.player2}
                  isActive
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishPage
