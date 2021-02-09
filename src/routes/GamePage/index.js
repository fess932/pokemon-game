import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import { useState, useContext } from 'react'
import { PokemonContext } from '../../context/pokemonContext'
import { FireBaseContex } from '../../context/firebaseContext'

import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'

const GamePage = () => {
  const match = useRouteMatch()
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const firebase = useContext(FireBaseContex)
  console.log('### selectedPokemons: ', selectedPokemons)

  const history = useHistory()
  const updateSelectedPokemons = (pokemons) => {
    setSelectedPokemons(pokemons)
    history.push(`${match.path}/board`)
  }

  return (
    <PokemonContext.Provider
      value={{
        firebase,
        selectedPokemons,
        updateSelectedPokemons,
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
