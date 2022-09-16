import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');
  
  const { addData } = useContext(FormContext)

  const handleClick = (event) => {
    event.preventDefault();
    const personalInfo = {
      name,
      age,
      city,
      module,
    }
    addData(personalInfo);
    setName('');
    setAge('');
    setCity('');
    setModule('');
  }

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            />
        </label>
        <label htmlFor="age">
          Idade
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
            />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={({ target }) => setCity(target.value)}
            />
        </label>
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            name="module"
            id="fundamentals"
            value="Fundamentos"
            checked={ module === "Fundamentos" }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            name="module"
            id="frontend"
            value="Front-end"
            checked={ module === "Front-end" }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            name="module"
            id="backend"
            value="Back-end"
            checked={ module === "Back-end" }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
        <label htmlFor="cs">
          Ciência da Computação
          <input
            type="radio"
            name="module"
            id="cs"
            value="Ciência da Computação"
            checked={ module === "Ciência da Computação" }
            onChange={ ({ target }) => setModule(target.value) }
          />
        </label>
      </fieldset>
      <button
        type='submit'
        onClick={ handleClick }
      >
        Enviar!
      </button>
    </form>
  );
}

export default Form;