import './App.css'
import Header from "./components/header/Header"
import Button from "./components/button/Button"
import {useState} from "react"
import NewEmployee from "./components/modal/NewEmployee"


function App() {
    // const [isShown, setIsShown] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen((isOpen) => true)
    }

  return (
      <div className="App">
          <Header/>
          <main className="main-container">
              {isOpen === true ?
                  <NewEmployee/>
                  :
                  <div className="button-container">
                      <Button className={"button"} text={"Create new employee"} click={open}/>
                      <Button className={"button"} text={"View current employees"}/>
                  </div>
              }
          </main>
      </div>
  );
}

export default App;
