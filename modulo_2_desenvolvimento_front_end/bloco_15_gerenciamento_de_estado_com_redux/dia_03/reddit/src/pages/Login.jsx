import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { dispatchLogin, history } = this.props;
    dispatchLogin({ email, password });
    history.push('/costumers-list');
  };

  render() {
    const { password, email } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Seu email"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Senha"
            onChange={this.handleChange}
          />
        </label>
        <button
          onClick={this.handleClick}
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (userData) => dispatch(login(userData)),
});

export default connect(null, mapDispatchToProps)(Login);
