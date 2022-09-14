import React from 'react';
import colorsContext from '../context/ColorsContext';
import '../styles/box.css';

class ColorBox extends React.Component {
  render() {
    const { nextColor, colors, colorsIndex } = this.context
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorsIndex] } }
        onClick={ () => nextColor()}
      >
        Click me to change my color!<br/>
        {colors[colorsIndex]}
      </button>
    )
  }
}


ColorBox.contextType = colorsContext;
export default ColorBox;