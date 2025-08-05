import "./App.css"
import { useLocation } from "react-router"

function App() {
  let location = useLocation();
  let state = location.state;

  let item;
  if (state && state.item)
    item = state.item;
  else
    item = "website";

  return (
    <div className="main-frame">
      <p className="title">
        You found my {item}!
      </p>
      <div className="body-container">
        <div>
          <p className="body-text">
            Glenn;
          </p>
          <div className="body-text">
            <p>
              {"→ "}Traveler,
            </p>
            <p>
              {"→ "}Weirdo,
            </p>
            <p>
              {"→ "}QR code enthusiast  
            </p>
          </div>
        </div>
      </div>
      <div className="icon-container">
        <a href="https://instagr.am/glennminusgbg">
          <div className="icon">
              <img src="/instagram.png" />
          </div>
        </a>
        <a href="https://linkedin.com/in/glenn-olsson/">
          <div className="icon">
              <img src="/linkedin.png" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
