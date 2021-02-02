const GamePage = ({ onChangePage }) => {
  const handleOnClick = () => {
    onChangePage && onChangePage('app')
  }

  return (
    <div className="root">
      <div>This is Game Page!</div>
      <button onClick={handleOnClick}>Back to homepage</button>
    </div>
  )
}

export default GamePage
