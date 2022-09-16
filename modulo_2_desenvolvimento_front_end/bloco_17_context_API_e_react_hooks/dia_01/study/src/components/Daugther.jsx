import React, { Component } from 'react';
import MyContext from './MyContext';

class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha!!!</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`E tenho ${value.money} para gastar`}</p>
                <button onClick={value.spendMoney}>GASTAR DINHEIRO</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Daugther;