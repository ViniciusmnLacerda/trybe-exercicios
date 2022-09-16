import React, { Component } from 'react';
import Daugther from './Daugther';

class Mother extends Component {
  render() {
    return (
      <div>
        <h3>Eu sou a mãe</h3>
        <Daugther />
      </div>
    )
  }
}

export default Mother;