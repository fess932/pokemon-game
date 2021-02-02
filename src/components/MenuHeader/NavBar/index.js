import s from './style.module.css'
import cn from 'classnames'

const NavBar = ({ onClickMenu, isActive }) => {
  return (
    <nav className={cn(s.navbar, { [s.bgActive]: isActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>POKE</p>

        <button
          onClick={onClickMenu}
          className={cn(s.humburger, { [s.isActive]: isActive })}
        >
          <span className={s.humburgerLabel}>Menu</span>

          <span className={cn(s.humburgerBox)}>
            <span />
          </span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
