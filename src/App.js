import Header from './components/header'
import Layout from './components/layout'
import PokemonCard from './components/PokemonCard'
import Footer from './components/footer'

import POKEMONS from './pokemonsData.json'

import s from './style.module.css'

import Bg2 from './bg2.jpg'
import Bg3 from './bg3.jpg'

const App = () => {
  return (
    <>
      <Header title="Pokemon game" descr="This is simple triple card game" />

      <Layout id="rules" title="Rules" urlBg={Bg2}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>

      <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className={s.flex}>
          {POKEMONS.map((item) => (
            <PokemonCard
              name={item.name}
              id={item.id}
              values={item.values}
              img={item.img}
              type={item.type}
              key={item.id}
            />
          ))}
        </div>
      </Layout>

      <Layout id="about" title="Full Rules" urlBg={Bg3}>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared.
        </p>
        <p>
          If the rank of the opponent's card is higher than the player's card,
          the player's card will be captured and turned into the opponent's
          color. If the player's rank is higher, the opponent's card will be
          captured and changed into the player's color instead.
        </p>
      </Layout>

      <Footer />
    </>
  )
}

export default App
