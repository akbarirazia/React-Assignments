import Button from "./Button"
import Alert from "./components/Alert"
import "./App.css"
import { useState } from "react"

function App() {
  const [buttonClicked, setButtonClicked] = useState(false)
  function handleClick() {
    setButtonClicked(!buttonClicked)
  }
  return (
    <div>
      {buttonClicked && <Alert onGoBack={handleClick} />}
      {!buttonClicked && (
        <Button onClick={handleClick}>DO NOT Click me!</Button>
      )}
      {/* {buttonClicked ? (
        <Alert onGoBack={handleClick} />
      ) : (
        <Button onClick={handleClick}>DO NOT CLICK ME!</Button>
      )} */}
    </div>
  )
}

export default App
