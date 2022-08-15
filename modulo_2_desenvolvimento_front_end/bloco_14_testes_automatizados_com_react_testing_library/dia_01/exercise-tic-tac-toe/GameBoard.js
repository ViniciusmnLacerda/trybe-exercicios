import PropTypes from 'prop-types';
import React from 'react';
import './GameBoard.css';
import GameCell from './GameCell';

class GameBoard extends React.Component {
  render() {
    const { gameState, controlPlayersTurn, activePlayer, alert, winner } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, index) => (
          <GameCell
            id={ `gamecell-${playerId}-${index}` }
            key={ `gamecell-${playerId}-${index}` }
            controlPlayersTurn={ () => controlPlayersTurn(index) }
            activePlayer={ activePlayer }
            player={ playerId }
            alert={ alert }
            winner={ winner }
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  controlPlayersTurn: PropTypes.func.isRequired,
  activePlayer: PropTypes.number.isRequired,
};

export default GameBoard;
