import React from 'react';
import Card from './components/Card';
import Delete from './components/Delete';
import Filters from './components/Filters';
import Form from './components/Form';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      filteredDeck: [],
      filterName: '',
      filterRarity: 'todas',
      filterTrunfo: false,
      filterDisabled: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validate = this.validate.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.validateHasTrunfo = this.validateHasTrunfo.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.filterByRarity = this.filterByRarity.bind(this);
    this.filterByTrunfo = this.filterByTrunfo.bind(this);
  }

  onInputChange({ target }) { // Feito com a ajuda do Thomas Boos Pegler//
    const { name, value } = target;
    if (name === 'cardTrunfo') {
      return this.setState((estadoAnterior) => ({
        [name]: !estadoAnterior[name],
      }));
    }
    return this.setState({ [name]: value }, this.validate);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, deck, cardTrunfo, cardRare } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    };
    this.setState({ deck: [...deck, card], filteredDeck: [...deck, card] }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        isSaveButtonDisabled: true,
        cardTrunfo: false,
      });
      this.validateHasTrunfo();
    });
  }

  validate() {
    const magicNumber1 = 90;
    const magicNumber2 = 210;
    const { cardName, cardImage,
      cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arrayStrings = [
      cardDescription,
      cardName,
      cardImage,
    ];
    let buttonIsDisabled = arrayStrings.every(Boolean);
    if (buttonIsDisabled) {
      const arrayNumbers = [
        parseInt(cardAttr1, 10) >= 0,
        parseInt(cardAttr2, 10) >= 0,
        parseInt(cardAttr3, 10) >= 0,
        parseInt(cardAttr1, 10) <= magicNumber1,
        parseInt(cardAttr2, 10) <= magicNumber1,
        parseInt(cardAttr3, 10) <= magicNumber1,
        parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
          + parseInt(cardAttr3, 10) <= magicNumber2,
      ];
      buttonIsDisabled = arrayNumbers.every(Boolean);
    }
    this.setState(({
      isSaveButtonDisabled: !buttonIsDisabled,
    }));
  }

  deleteCard(event) {
    const { deck } = this.state;
    const cardKey = event.target.getAttribute('data-key');
    const toBeRemoved = deck.indexOf(deck.find((card) => card.cardName === cardKey));
    deck.splice(toBeRemoved, 1);
    this.setState({ deck, filteredDeck: deck }, this.validateHasTrunfo);
  }

  validateHasTrunfo() {
    const { deck } = this.state;
    const trunfo = deck.some((element) => element.cardTrunfo);
    this.setState({ hasTrunfo: trunfo });
  }

  filterByName({ target }) {
    const { name, value } = target;
    const { deck, filterName } = this.state;
    this.setState({ [name]: value }, () => {
      let filteredDeck = deck.filter((card) => card.cardName.includes(filterName));
      if (value === '') {
        filteredDeck = deck;
      }
      this.setState({ filteredDeck });
    });
  }

  filterByRarity({ target }) {
    const { name, value } = target;
    const { deck } = this.state;
    this.setState({ [name]: value }, () => {
      let filteredDeck = deck.filter((card) => card.cardRare === value);
      if (value === 'todas') {
        filteredDeck = deck;
      }
      this.setState({ filteredDeck });
    });
  }

  filterByTrunfo({ target }) {
    const { name } = target;
    const { deck, filterTrunfo } = this.state;
    let { filteredDeck } = this.state;
    this.setState({ [name]: !filterTrunfo, filterDisabled: !filterTrunfo }, () => {
      const deckAssistant = deck.filter((element) => element.cardTrunfo);
      filteredDeck = !filterTrunfo ? deckAssistant : deck;
      this.setState({
        filterRarity: 'todas',
        filterName: '',
        filteredDeck,
      });
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      filteredDeck,
      filterTrunfo,
      filterName,
      filterRarity,
      filterDisabled,
    } = this.state;

    return (
      <div className="App">
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <div className="card-preview-container">
          <div className="new-card-title">
            <h1>Pré Visualização</h1>
          </div>  
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="cards-view-container">
          <h1 className="cards-view-title">Todas as cartas</h1>
          <Filters
            filterByName={ this.filterByName }
            filterByRarity={ this.filterByRarity }
            filterByTrunfo={ this.filterByTrunfo }
            filterTrunfo={ filterTrunfo }
            filterName={ filterName }
            filterRarity={ filterRarity }
            filterDisabled={ filterDisabled }
          />
          <div className="deck-container">
            {filteredDeck.map((card) => (
              <div className="card-view" key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardImage={ card.cardImage }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <Delete
                  dataKey={ card.cardName }
                  deleteCard={ this.deleteCard }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
