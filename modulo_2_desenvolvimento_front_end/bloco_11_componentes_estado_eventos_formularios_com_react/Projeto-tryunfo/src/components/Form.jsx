import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div className="new-card-container">
        <div className="new-card">
          <h1>Adicionar nova carta</h1>
        </div>
        <form className="form">

          <div className="container">
            <label htmlFor="cardNname">
              <span className="form-span">Nome</span>
              <input
                data-testid="name-input"
                type="text"
                name="cardName"
                id="cardName"
                placeholder="Nome da carta"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="container">
            <label htmlFor="cardDescription">
            <span className="form-span">Descrição</span>
              <textarea
                name="cardDescription"
                id="cardDescription"
                cols="30"
                rows="10"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="container">
            <label className="label-attr" htmlFor="cardAttr1">
              <span className="form-span-attr">Damage</span>
              <input
                className="input-attr"
                type="number"
                name="cardAttr1"
                id="cardAttr1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="container">
            <label className="label-attr" htmlFor="cardAttr2">
              <span className="form-span-attr">Life</span>
              <input
                className="input-attr"
                type="number"
                name="cardAttr2"
                id="cardAttr2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="container">
            <label className="label-attr" htmlFor="cardAttr3">
              <span className="form-span-attr">Armor</span>
              <input
                className="input-attr"
                type="number"
                name="cardAttr3"
                id="cardAttr3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="container">
            <label className="label-image" htmlFor="cardImage">
              <span className="form-span-image">Image</span>
              <input
                data-testid="image-input"
                type="text"
                name="cardImage"
                id="cardImage"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="cardRare">
          <span className="label-card-rare">Raridade</span>
            <select
              name="cardRare"
              id="cardRare"
              defaultValue=""
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <div className="container">
            {!hasTrunfo ? (
              <label className="label-trunfo" htmlFor="cardTrunfo">
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                <span className="form-span-checkbox">Super Tryber Trunfo</span>
              </label>
            ) : (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            )}
          </div>

          <div className="container">
            <button
              type="submit"
              data-testid="save-button"
              className="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
