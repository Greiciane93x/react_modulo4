
import './App.css';

import Footer from './components/Footer/Footer'
import Form from './components/Form/FormContato'
import Home from './components/Home'
import Input from './components/Input/Input'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      
      <div className="header">
      
        <div>
            <Link to="/" id="geral">Início</Link>
        </div> 
        <div>
          <Link to="/" id="bonsDrinks">Bons Drinks</Link>
        </div>
        <div> 
            <Link to="/contato" id="geral">Contato</Link>
        </div>
        <div>
          <Link to="/bonsdrinks">EndPoint</Link>
        </div>
       
        
      </div>
    

    <Switch>
      <Route path="/form"> 
        <Form /> 
      </Route>
      <Route path="/contato"> 
        <Form/> 
      </Route>
      <Route path="/bonsdrinks">
        <Input /> 
      </Route>
      <Route path="/"> 
        <Home /> 
        <Footer /> 
      </Route>
    
    </Switch>
  </div> 
    </Router> 
  )
}

export default App; 
