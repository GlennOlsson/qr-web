import "./App.css"
import { useLocation } from "react-router"

function App() {
  let location = useLocation();
  let item = location.state.item ? location.state.item : "something...";

  console.log("Item: ", item);
  return (
    <>
      You found my {item}
      Glenn; Traveler, weirdo, self-proclaimed QR code enthusiast
    </>
  )
}

export default App
