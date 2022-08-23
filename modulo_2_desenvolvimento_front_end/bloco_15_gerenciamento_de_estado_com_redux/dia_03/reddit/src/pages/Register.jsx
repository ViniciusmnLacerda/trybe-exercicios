import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerCostumer } from '../store/actions/index';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { name, email, age } = this.state;
    const { dispatchCostumer } = this.props;
    dispatchCostumer({ name, email, age });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label htmlFor="age">
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Idade"
              onChange={this.handleChange}
              value={age}
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button
          type="button"
          onClick={this.handleClick}
        >
          Cadastrar Cliente

        </button>
        <button
          type="button"
        >
          <Link to="/costumers-list">Página de Clientes Cadastrados</Link>

        </button>
      </div>
    );
  }
}

Register.propTypes = {
  dispatchCostumer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCostumer: (costumerData) => dispatch(registerCostumer(costumerData)),
});

export default connect(null, mapDispatchToProps)(Register);
