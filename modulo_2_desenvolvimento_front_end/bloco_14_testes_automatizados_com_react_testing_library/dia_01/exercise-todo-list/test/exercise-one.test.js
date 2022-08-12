import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const TASK = 'Fazer o exercício 1 do dia 14.1';
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    userEvent.type(input, TASK);
    expect(screen.queryByText(TASK)).not.toBeInTheDocument();
    userEvent.click(button);
    expect(screen.queryByText(TASK)).toBeInTheDocument();
  });
});
