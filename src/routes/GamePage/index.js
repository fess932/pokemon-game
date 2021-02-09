import { Switch, useRouteMatch, Route } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from '../../context/pokemonContext'

import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'
import database from '../../service/firebase'

const GamePage = () => {
  const [cards, mutateCards] = useState([])
  const match = useRouteMatch()

  const pokemonContext = useContext(PokemonContext)
  console.log(pokemonContext)

  const updateCards = () => {
    database.ref('pokemons').once('value', (snapshot) => {
      mutateCards(snapshot.val())
    })
    console.log('####: update, ', cards)
  }

  useEffect(() => {
    updateCards()
  }, [updateCards])

  console.log(cards)

  return (
    <PokemonContext.Provider
      value={{
        pokemon: [],
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  )
}

export default GamePage
