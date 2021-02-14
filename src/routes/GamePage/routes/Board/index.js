import s from './style.module.css'

import { useContext } from 'react'
import { PokemonContext } from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'

const BoardPage = () => {
  const { selectedPokemons } = useContext(PokemonContext)
  console.log(selectedPokemons)

  const handleChangeActive = (id) => {
    console.log('handle active, id:', id)
  }

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.entries(selectedPokemons).map(
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
              clickHandler={handleChangeActive}
              className={s.card}
              minimize={true}
            />
          )
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  )
}

export default BoardPage
