import { useEffect, useState } from "react";

const usePokemonSprite = () => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonUrl, setPokemonUrl] = useState('');
  useEffect(() => {
    const getPokemonImage = async () => {
      const { sprites } = await fetch(pokemonUrl).then(response => response.json());
      const { front_default: sprite } = sprites
      setPokemonImage(sprite)
    }
    if(pokemonUrl){getPokemonImage()};
  }, [pokemonUrl]);

  return [pokemonImage, setPokemonUrl]
}

export default usePokemonSprite;