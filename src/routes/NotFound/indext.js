const NotFound = ({ onChangePage }) => {
  const handleOnClick = () => {
    onChangePage && onChangePage('app')
  }

  return (
    <div className="root">
      <div>404 Not Found Page</div>
      <button onClick={handleOnClick}>Back to homepage</button>
    </div>
  )
}

export default NotFound
