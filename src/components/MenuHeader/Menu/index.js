import cn from 'classnames'
import { Link } from 'react-router-dom'

import s from './style.module.css'

const MENU = [
  { to: '/', title: 'HOME' },
  { to: '/game', title: 'GAME' },
  { to: '/about', title: 'ABOUT' },
  { to: '/contact', title: 'CONTACT' },
]

const Menu = ({ onClickMenu, isActive, bgActive }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isActive === true,
        [s.deactive]: isActive === false || bgActive === true,
      })}
    >
      <div className={s.overlay} />

      <ul>
        {MENU.map(({ title, to }, index) => (
          <li key={index}>
            <Link onClick={onClickMenu} to={to}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
