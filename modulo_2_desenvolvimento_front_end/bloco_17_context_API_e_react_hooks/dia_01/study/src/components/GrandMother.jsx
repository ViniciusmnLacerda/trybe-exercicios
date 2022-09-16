import React, { Component } from 'react';
import Mother from './Mother';

class GrandMother extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a avó</h2>
        <Mother />
      </div>
    )
  }
}

export default GrandMother;