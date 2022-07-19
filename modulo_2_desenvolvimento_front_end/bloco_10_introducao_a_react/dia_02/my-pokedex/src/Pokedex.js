import React from "react";
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex-container">
        {pokemons.map((element) => <Pokemon key={element.id} pokemonObject={element} />)}
      </div>
    );
  }
}

export default Pokedex