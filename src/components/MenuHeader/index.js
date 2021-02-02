import Menu from './Menu'
import NavBar from './NavBar'
import { useState } from 'react'

const MenuHeader = () => {
  const [isActive, setIsActive] = useState(false)

  const handleOnClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <Menu onClickMenu={handleOnClick} isActive={isActive} />
      <NavBar onClickMenu={handleOnClick} isActive={isActive} />
    </>
  )
}

export default MenuHeader
