import React from 'react'; 
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemonObject: { name, type, averageWeight, image } } = this.props; 
    
    return (
      <div className='pokemon-container'>
        <div className='text-container'>
          <ol>
            <li className='item-list'>{ name }</li>
            <li className='item-list'>{ type }</li>
            <li className='item-list'>{ `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</li>
          </ol>
        </div>
        <div className='image-container'>
          <img src={ image } alt={ `${name} sprite` } />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemonObject: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon