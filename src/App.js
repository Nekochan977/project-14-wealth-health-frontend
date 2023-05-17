import './App.css';
import Header from "./components/header/Header";
import Button from "./components/button/Button";

function App() {
  return (
      <div className="App">
          <Header/>
          <main className="main-container">
              <div className="button-container"></div>
              <Button text={"Create new employee"}/>
              <Button text={"View current employees"} />
          </main>
      </div>
  );
}

export default App;
