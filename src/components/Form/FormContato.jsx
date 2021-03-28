import React, { Component } from "react";
import imgContato from "/src/contato.jpeg";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <label htmlFor="name">Nome: </label>
          <br />
          <input type="text" name="nome" /> <br />
          <label htmlFor="name">Email: </label>
          <br />
          <input type="text" name="nome" /> <br />
          <label htmlFor="name">Mensagem</label>
          <br />
          <textarea name="mensagem"></textarea> <br />
          <button id="enviar">Enviar</button>
        </div>
        <div>
          <img src={imgContato} id="img-contato" alt="Imagem Contato" />
        </div>
      </div>
    );
  }
}

export default Form;
