import cn from 'classnames'
import { useState } from 'react'

import PokemonCard from '../../../../../../components/PokemonCard'
import s from './style.module.css'

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null)

  return (
    <>
      {cards.map((card) => (
        <div
          className={cn(s.cardBoard, {
            [s.selected]: player === 1 && isSelected === card.id,
            [s.selected2]: player === 2 && isSelected === card.id,
          })}
          onClick={() => {
            console.log('set select', card.id)
            setSelected(card.id)
            onClickCard && onClickCard({ player, ...card })
          }}
        >
          <PokemonCard
            key={card.id}
            name={card.name}
            img={card.img}
            id={card.id}
            type={card.type}
            values={card.values}
            minimize
            isActive
          />
        </div>
      ))}
    </>
  )
}

export default PlayerBoard
