import "./App.css";

import Footer from "./components/Footer/Footer";
import Form from "./components/Form/FormContato";
import Home from "./components/Home";
import Sobre from "./components/Sobre/Sobre";
import SearchDrink from "./endpoint/bonsDrinks";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NossoTime from "./components/NossoTime/NossoTIme";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div>
            <Link to="/inicio" id="geral">
              Início
            </Link>
          </div>
          <div>
            <Link to="/contato" id="geral">
              Contato
            </Link>
          </div>
          <div>
            <Link to="/bonsDrinks" id="bonsDrinks">
              Bons Drinks
            </Link>
          </div>
          <div>
            <Link to="/nossoTime" id="geral">
              Nosso Time
            </Link>
          </div>
          <div>
            <Link to="/sobre" id="geral">
              Sobre nós
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/inicio">
            <Home />
            <Footer />
          </Route>
          <Route path="/contato">
            <Form />
            <Footer />
          </Route>
          <Route path="/bonsDrinks">
            <SearchDrink />
          </Route>
          <Route path="/sobre">
            <Sobre />
            <Footer />
          </Route>
          <Route path="/nossoTime">
            <NossoTime />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
