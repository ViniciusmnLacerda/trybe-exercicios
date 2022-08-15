import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

const boardSize = 9;
describe('Configuração inicial do jogo', () => {
  test('Verificar se foi renderizada nove casas', () => {
    render(<App />);
    for (let index = 0; index < boardSize; index += 1) {
      expect(screen.getByTestId(`cell_gamecell-0-${index}`)).toBeInTheDocument();
    }
  });

  test('Começar com todos os espaços em branco', () => {
    render(<App />);
    const x = screen.queryByAltText('X');
    const o = screen.queryByAltText('O');
    expect(x).not.toBeInTheDocument();
    expect(o).not.toBeInTheDocument();
  });

  test('Começar sem a frase Fim do jogo', () => {
    render(<App />);
    const endGame = screen.queryByText('Fim de jogo');
    expect(endGame).not.toBeInTheDocument();
  });
});
