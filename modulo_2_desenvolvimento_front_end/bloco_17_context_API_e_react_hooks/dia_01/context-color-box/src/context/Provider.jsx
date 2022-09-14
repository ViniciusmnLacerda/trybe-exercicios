import PropTypes from 'prop-types';
import { Component } from 'react';
import colorsContext from './ColorsContext';

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['blue', 'red', 'green'],
      colorsIndex: 0,
    }
    this.nextColor = this.nextColor.bind(this);
  }

  nextColor() {
    const { colors, colorsIndex } = this.state; 
    if(colorsIndex < colors.length - 1) {
      this.setState((prevState => ({ colorsIndex: prevState.colorsIndex + 1 })))
    } else {
      this.setState({ colorsIndex: 0 })
    }
  }

  render() {
    const context = {
      ...this.state,
      nextColor: this.nextColor,
    }
    const { children } = this.props;
    return (
      <colorsContext.Provider value={ context }>
        {children}
      </colorsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider