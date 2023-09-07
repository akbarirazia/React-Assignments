import Button from "../Button"
import "./Alert.css"

function Alert({ onGoBack }) {
  return (
    <>
      <div id="alert">
        <h2>You Clicked?</h2>
        <h4>Too Bad cause this program doesn't have any other functionality</h4>
        <br />
        <Button onClick={() => onGoBack()}>GO BACK!</Button>
      </div>
    </>
  )
}

export default Alert
