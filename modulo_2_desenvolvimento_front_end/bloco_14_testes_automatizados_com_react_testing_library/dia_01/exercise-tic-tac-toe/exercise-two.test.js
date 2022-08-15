import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

describe('Testa o comportamento do game board', () => {
  test('Ao clicar na primeira célula deve aparecer a imagem X.', () => {
    render(<App />);
    const cell = screen.getByTestId('cell_gamecell-0-0');
    userEvent.click(cell);
    const xImage = screen.getByTestId('cell_X_gamecell-1-0');
    expect(xImage).toBeInTheDocument();
  });
  test('Verifica se uma célula não pode ser jogada duas vezes.', () => {
    render(<App />);
    const cell = screen.getByTestId('cell_gamecell-0-0');
    userEvent.click(cell);
    userEvent.click(cell);
    const xImage = screen.getByTestId('cell_X_gamecell-1-0');
    expect(xImage).toBeInTheDocument();
  });
  test('Verifica se a segunda jogada é do tipo O', () => {
    render(<App />);
    const cellZero = screen.getByTestId('cell_gamecell-0-0');
    const cellOne = screen.getByTestId('cell_gamecell-0-1');
    userEvent.click(cellZero);
    userEvent.click(cellOne);
    const oImage = screen.getByTestId('cell_O_gamecell-2-1');
    expect(oImage).toBeInTheDocument();
  });
});
