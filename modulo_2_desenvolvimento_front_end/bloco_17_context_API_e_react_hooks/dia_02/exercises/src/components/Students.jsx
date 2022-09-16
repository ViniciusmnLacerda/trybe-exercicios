import { useContext } from 'react';
import FormContext from '../context/FormContext';

function Students() {
  const { data } = useContext(FormContext);
  return (
    <ul>
      { data.map((student, index) => {
        const { name, age, city, module } = student;
        return (
          <li key={ index }>
            <p>{`Nome: ${name}`}</p>
            <p>{`Idade: ${age}`}</p>
            <p>{`Cidade: ${city}`}</p>
            <p>{`Module: ${module}`}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default Students