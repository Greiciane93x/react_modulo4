import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <div id="home">Início</div>
        <div id="drinks">Drinks</div>
        <div id="maisUm">Mais Um</div>
      </header>

      <div className="container"> 
        <label name="nome">Nome: </label>
        <input type="text" className="input"/>
        <label name="email">Email: </label>
        <input type="text" className="input"/> 
        <label name="mensagem">Mensagem: </label>
        <textarea name="mensagem" className="input"></textarea>
      </div>

      <div className="rodape">

        <p>Projeto Inicial - React</p>
      </div>
    </div>
  );
}

export default App;
