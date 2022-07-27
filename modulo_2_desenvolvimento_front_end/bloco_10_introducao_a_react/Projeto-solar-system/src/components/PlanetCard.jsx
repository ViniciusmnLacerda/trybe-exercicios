import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planet-card-container" data-testid="planet-card">
        <div className="image-container">
          <img
            className="planet-image"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
        <p className="planet-name" data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
