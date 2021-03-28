import { Component } from "react";
import React from "react";
import imgSobre from "/src/foto-nane.jpeg";
import imgLinkedin from "/src/linkedin.png";
import imgGithub from "/src/github.png";

class Sobre extends Component {
  render() {
    return (
      <div>
        <img src={imgSobre} alt="Minha Foto" id="foto" /> <br />
        <p id="descricao">Clique abaixo para saber um pouco mais... </p>
        <a href="https://www.linkedin.com/in/greiciane-araujo/">
          <img src={imgLinkedin} alt="Linkedin" id="linkedin" />
        </a>
        <a href="https://github.com/Greiciane93x">
          <img src={imgGithub} alt="Github" id="github" />
        </a>
      </div>
    );
  }
}
export default Sobre;
