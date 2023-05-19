import './App.css';
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import {useState} from "react";
import NewEmployee from "./components/modal/NewEmployee";


function App() {
    const [isShown, setIsShown] = useState(true)
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
        // setIsShown((isShown) => !isShown)
    }



  return (
      <div className="App">
          <Header/>
          <main className="main-container">
              {isShown &&
                  <div className="button-container">
                      <Button text={"Create new employee"} click={toggle}/>
                      <Button text={"View current employees"}/>
                  </div>
              }
              {isOpen && <NewEmployee/>}
          </main>
      </div>
  );
}

export default App;
