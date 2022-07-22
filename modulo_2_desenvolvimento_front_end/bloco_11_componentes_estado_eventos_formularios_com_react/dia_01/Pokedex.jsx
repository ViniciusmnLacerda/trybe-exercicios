import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import { element } from 'prop-types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      type: '',
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.filterByType = this.filterByType.bind(this);
  }

  handleClickNext() {
    const { counter } = this.state;
    if (counter === pokemons.length - 1) {
      this.setState(() => ({
        counter: 0,
      }));
    } else {
      this.setState((estadoAnterior) => ({
        counter: estadoAnterior.counter + 1,
      }));
    }
  }

  filterByType(event) {
    this.setState({
      type: event.target.innerText,
    });
  }

  render() {
    let teste = [];
    const { counter, type } = this.state;
    if (!counter && type === '') {
      teste = [pokemons[0]];
    } if (counter && type === '') {
      teste = [pokemons[counter]];
    } if (type !== '') {
      teste = pokemons.filter((element) => element.type === type);
    }
    return (
      <div className="pokedex-container">
        <div className="pokedex">
        {teste.map((pokemon) => (
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />
        ))}
        </div>
        <div className="buttons-container">
          <button
            className="next-button"
            onClick={ this.handleClickNext }
            type="button"
          >
            Próximo Pokemon
          </button>
          <button
            className="fire-button"
            type="button"
            onClick={ this.filterByType }
          >
            Fire
          </button>
          <button
            className="psychic-button"
            type="button"
            onClick={ this.filterByType }
          >
            Psychic
          </button>
          <button
            className="eletric-button"
            type="button"
            onClick={ this.filterByType }
          >
            Electric
          </button>
          <button
            className="bug-button"
            type="button"
            onClick={ this.filterByType }
          >
            Bug
          </button>
          <button
            className="poison-button"
            type="button"
            onClick={ this.filterByType }
          >
            Poison
          </button>
          <button
            className="normal-button"
            type="button"
            onClick={ this.filterByType }
          >
            Normal
          </button>
          <button
            className="dragon-button"
            type="button"
            onClick={ this.filterByType }
          >
            Dragon
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
