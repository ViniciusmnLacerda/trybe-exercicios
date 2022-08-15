import PropTypes from 'prop-types';
import React from 'react';
import './GameCell.css';
import oImage from './o.svg';
import xImage from './x.png';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, controlPlayersTurn, player } = this.props;
    if (player === 1) {
      return (
        <div
          onClick={ controlPlayersTurn }
          data-testid={ `cell_${id}` }
          className="game-cell"
          role="button"
          onKeyPress={ controlPlayersTurn }
          aria-label="Cell"
          tabIndex="0"
        >
          <img
            src={ xImage }
            alt="X"
            data-testid={ `cell_X_${id}` }
          />
        </div>
      );
    }
    if (player === 2) {
      return (
        <div
          onClick={ controlPlayersTurn }
          data-testid={ `cell_${id}` }
          className="game-cell"
          role="button"
          onKeyPress={ controlPlayersTurn }
          aria-label="Cell"
          tabIndex="0"
        >
          <img
            src={ oImage }
            alt="O"
            data-testid={ `cell_O_${id}` }
          />
        </div>
      );
    }
    return (
      <div
        onClick={ controlPlayersTurn }
        data-testid={ `cell_${id}` }
        className="game-cell"
        role="button"
        onKeyPress={ controlPlayersTurn }
        aria-label="Cell"
        tabIndex="0"
      />
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
  controlPlayersTurn: PropTypes.func.isRequired,
};

export default GameCell;
