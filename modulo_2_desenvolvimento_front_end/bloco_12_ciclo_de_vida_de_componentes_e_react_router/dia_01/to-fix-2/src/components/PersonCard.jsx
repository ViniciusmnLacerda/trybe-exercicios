import React from 'react';

class PersonCard extends React.Component {
  render() {
    const { name, age, email, image } = this.props; 
    return(
      <div>
        <h3>{ name }</h3>
        <p>{ age }</p>
        <p>{ email }</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

export default PersonCard