import { Component } from "react";
import React from "react";
import fotoAne from "/src/foto-nane.jpeg";
import fotoCarol from "/src/caroline.jpeg";
import fotoJuliete from "/src/juliete.jpeg";

class NossoTime extends Component {
  render() {
    return (
      <div>
        <p>Greiciane Assis</p>
        <img src={fotoAne} alt="Ane" class="nossoTime" />
        <p>Caroline Noronha</p>
        <img src={fotoCarol} alt="Caroline" class="nossoTime" />
        <p>Juliete Freitas</p>
        <img src={fotoJuliete} alt="Juliete" class="nossoTime" />
      </div>
    );
  }
}
export default NossoTime;
