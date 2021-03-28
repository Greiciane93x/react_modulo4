import React, { useState, useEffect } from "react";

function SearchDrink() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => {
        return response.json();
      })
      .then((dados) => {
        dados = dados.drinks;
        setDrinks(dados);
      });
  }, []);

  return (
    <div>
      {drinks.map((drink) => {
        return (
          <div class="container-drinks">
            <img
              src={drink.strDrinkThumb}
              id="img-drink"
              alt="Imagem Drink"
            ></img>
            <p id="nome-drink">{drink.strDrink}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchDrink;
