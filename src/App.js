import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import {HOME} from "./Routes";
import Layout from "./components/layout/Layout";


function App() {


  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path={HOME} element={<Layout/>}>
                      <Route index element={<Home />} />
                  </Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
