import React, { Component } from "react";
import img from "/src/imgdrinks.png";
class Home extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="Bons Drinks" id="img-home" />;
        <p id="bons-drinks-home">Bons Drinks</p>
      </div>
    );
  }
}
export default Home;
