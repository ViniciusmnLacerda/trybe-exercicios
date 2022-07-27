import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-container">
        <div className="sub-title-container">
          <Title headline="Planetas" />
        </div>
        <div className="planets-container">
          {Planets.map((element) => (<PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
