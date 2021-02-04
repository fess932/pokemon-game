import Menu from './Menu'
import NavBar from './NavBar'
import { useState } from 'react'

const MenuHeader = ({ bgActive }) => {
  const [isActive, setIsActive] = useState(null)

  const handleOnClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <Menu
        onClickMenu={handleOnClick}
        bgActive={bgActive}
        isActive={isActive}
      />
      <NavBar
        onClickMenu={handleOnClick}
        bgActive={bgActive}
        isActive={isActive}
      />
    </>
  )
}

export default MenuHeader
