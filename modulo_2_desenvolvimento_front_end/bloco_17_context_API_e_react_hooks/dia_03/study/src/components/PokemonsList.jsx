import React, { useEffect, useState } from 'react';
import usePokemonSprite from '../hooks/usePokemonSprite';
import BestPokemon from './BestPokemon';

function PokemonsList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [visible, setVisible] = useState(false)
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`

  const [pokemonImage, setPokemonUrl] = usePokemonSprite();

  //didmount e didupadte
  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await fetch(endpoint).then(response => response.json());
      setPokemonList(results);
    }
    getPokemons();
  }, [limit])

  //didupadte
  useEffect(() => console.log('atualizou'), [limit, pokemonList])

  const handleAddLimit = () => {
    setLimit(state => state + 10);
  }

  return (
    <main>
      <section>
        <img src={pokemonImage} alt="pokemon"></img>
        <h1>Pokemon List</h1>
        <button
          type="button"
          onClick={handleAddLimit}
        >
            Buscas mais pokemons
        </button>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
        >
            Mostrar o melhor pokemon
        </button>
        { visible && <BestPokemon /> }
        <ul>
          {pokemonList.map((pokemon) => (
              <li 
                onClick={() => setPokemonUrl(pokemon.url)}
                key={pokemon.name}
              >
                {pokemon.name}
              </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default PokemonsList;
