import { useHistory } from 'react-router-dom'

import s from './style.module.css'
const GoHome = () => {
  const router = useHistory()

  const clickHandler = () => {
    router.push('/')
  }

  return (
    <button className={s.button} onClick={clickHandler}>
      Back to homepage
    </button>
  )
}

export default GoHome
