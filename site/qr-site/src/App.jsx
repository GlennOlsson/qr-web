import "./App.css"
import { useLocation } from "react-router"

function App() {
  let location = useLocation();
  let state = location.state;

  console.log("state: ", state);

  let item;
  if (state && state.item)
    item = state.item;
  else
    item = "something...";

  return (
    <>
      You found my {item}
      Glenn; Traveler, weirdo, self-proclaimed QR code enthusiast
    </>
  )
}

export default App
