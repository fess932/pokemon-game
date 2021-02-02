import s from './style.module.css'

const Header = ({ title, descr, onClickButton }) => {
  const handleClick = () => {
    onClickButton && onClickButton('game')
  }
  return (
    <header className={s.root}>
      <div className={s.forest} />
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick} className={s.button}>
          Start game
        </button>
      </div>
    </header>
  )
}

export default Header
