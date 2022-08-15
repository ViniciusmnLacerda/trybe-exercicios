import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 0,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: '',
      alert: false,
    };
    this.controlPlayersTurn = this.controlPlayersTurn.bind(this);
    this.checkTheWinner = this.checkTheWinner.bind(this);
  }

  checkTheWinner() {
    const { winner } = this.state;
    if (winner === 1 || winner === 2) {
      this.setState({ alert: true });
    }
  }

  checkLines(gameBoard) {
    const lines = [0, 3, 6];
    let verify = [];
    lines.forEach((i) => {
      if (gameBoard[i] !== 0) {
        verify = [
          gameBoard[i] === gameBoard[i + 1],
          gameBoard[i + 1] === gameBoard[i + 2],
        ].every(Boolean);
        if (verify) {
          this.setState({ winner: gameBoard[i] }, this.checkTheWinner);
        }
      }
    });
    console.log(verify);
  }

  controlPlayersTurn(cell) {
    const { gameBoard } = this.state;
    let { activePlayer } = this.state;
    if (gameBoard[cell] === 0) {
      if (activePlayer === 1 || activePlayer === 0) {
        if (activePlayer === 0) activePlayer = 1;
        gameBoard[cell] = activePlayer;
        this.setState({ activePlayer: 2, gameBoard }, this.checkLines(gameBoard));
      } else if (activePlayer === 2) {
        gameBoard[cell] = activePlayer;
        this.setState({ activePlayer: 1, gameBoard }, this.checkLines(gameBoard));
      }
    }
  }

  render() {
    const { gameBoard, activePlayer, alert, winner } = this.state;
    return (<GameBoard
      controlPlayersTurn={ this.controlPlayersTurn }
      gameState={ gameBoard }
      activePlayer={ activePlayer }
      alert={ alert }
      winne={ winner }
    />);
  }
}

export default TicTacToe;
