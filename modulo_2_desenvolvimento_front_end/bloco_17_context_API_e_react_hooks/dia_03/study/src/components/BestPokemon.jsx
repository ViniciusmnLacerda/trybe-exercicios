import React, { useEffect } from 'react';
function BestPokemon() {

  //will unmount
  useEffect(() => {

    return () => console.log('desmontou');
  }, [])

  return (
    <h1>o melhor pokemon é o BLASTOISE!!</h1>
  );
}

export default BestPokemon