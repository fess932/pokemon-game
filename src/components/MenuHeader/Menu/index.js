import s from './style.module.css'
import cn from 'classnames'

const Menu = ({ onClickMenu, isActive }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isActive,
        [s.deactive]: !isActive,
      })}
    >
      <div className={s.overlay} />

      <ul>
        <li>
          <a href="#welcome" onClick={onClickMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="#game" onClick={onClickMenu}>
            GAME
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClickMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClickMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
