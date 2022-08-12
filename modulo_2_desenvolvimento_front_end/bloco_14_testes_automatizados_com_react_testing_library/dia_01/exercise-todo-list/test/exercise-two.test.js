import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    listTodo.forEach((task) => {
      userEvent.type(input, task);
      userEvent.click(button);
    });
    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Fazer o exercicio 2 do dia 14.1" />);
    expect(screen.getByText('Fazer o exercicio 2 do dia 14.1')).toBeInTheDocument();
  });
});
