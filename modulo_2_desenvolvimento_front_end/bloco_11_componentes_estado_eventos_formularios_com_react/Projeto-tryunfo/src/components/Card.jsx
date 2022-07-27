import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const path = "/images/logo.png";
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
        <div className="card-container-0">
          <div className="card-container-1">
            <div className="card-title-1">
            <div className="rarity-container">
                <p className="rarity" data-testid="rare-card">{ cardRare }</p>
            </div> 
              <h1 data-testid="name-card" className="card-title">{ cardName }</h1>
            </div>
            <div className="image-container">
              <img
                className="card-image"
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />

                {cardTrunfo && <img src="https://images2.imgbox.com/06/10/Klsm9ec9_o.png" className="image-super-trunfo"  id="super-trunfo" data-testid="trunfo-card"/>}
              </div>

            <p
              className="card-description"
              data-testid="description-card"
            >
              { cardDescription }
            </p>
            <div className="card-container-2">
              <div className="attrs">
                <div className="attr-container">
                  <p className="atribute">Damage</p>
                  <p className="attr-value" data-testid="attr1-card">{ cardAttr1 }</p>
                </div>
                <div className="attr-container">
                  <p className="atribute">Life</p>
                  <p className="attr-value" data-testid="attr2-card">{ cardAttr2 }</p>
                </div>
                <div className="attr-container">
                  <p className="atribute">Armor</p>
                  <p className="attr-value" data-testid="attr3-card">{ cardAttr3 }</p>
                </div>
              </div>
            </div>    
          </div>
        </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
