import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterByName, filterByRarity, filterByTrunfo,
      filterTrunfo, filterRarity, filterName, filterDisabled } = this.props;
    return (
      <div className="filters-container">
        <h1 className="filters-title">Filtros de busca</h1>
        <div className="filter-by-name">
          <label htmlFor="filterName">
            <input
              className="name-search"
              name="filterName"
              id="filterName"
              type="text"
              data-testid="name-filter"
              placeholder="Nome da carta"
              onChange={ filterByName }
              value={ filterName }
              disabled={ filterDisabled }
            />
          </label>
        </div>

        <div className="filter-by-rarity">
          <label htmlFor="filteRarity">
            <select
              placeholder="Raridade"
              className="rarity-search"
              name="filterRarity"
              id="filterRarity"
              defaultValue="todas"
              data-testid="rare-filter"
              onChange={ filterByRarity }
              value={ filterRarity }
              disabled={ filterDisabled }
            >
              <option value="todas">todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>

        <div className="filter-by-trunfo">
          <label htmlFor="filterTrunfo">
            <input
              className="label-trunfo-filter"
              type="checkbox"
              name="filterTrunfo"
              id="filterTrunfo"
              data-testid="trunfo-filter"
              onChange={ filterByTrunfo }
              checked={ filterTrunfo }
            />
            <span className="form-span-checkbox">Super Trunfo</span>
          </label>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByRarity: PropTypes.func.isRequired,
  filterByTrunfo: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};

export default Filters;
