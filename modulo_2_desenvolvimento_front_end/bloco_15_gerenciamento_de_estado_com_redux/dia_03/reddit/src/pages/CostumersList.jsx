/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCostumer } from '../store/actions/index';

class CostumersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
    };
  }

  sortCostumers = () => {
    this.setState((prevState) => ({
      isSorted: !prevState.isSorted,
    }));
  };

  sortedCostumers = () => {
    const { costumers } = this.props;
    const { isSorted } = this.state;
    const costumersCopy = [...costumers];
    costumersCopy.sort((a, b) => a.name.localeCompare(b.name));
    if (isSorted) return costumersCopy;
    return costumers;
  };

  render() {
    const {
      email, password, costumers, dispatchRemove,
    } = this.props;
    const arrayValidate = [
      email.length > 0,
      password.length > 0,
    ].every(Boolean);
    if (!arrayValidate) return <h1>Login não efetuado!</h1>;
    if (costumers.length === 0) {
      return (
        <div>
          <p>Nenhum cliente cadastrado</p>
          <button
            type="button"
          >
            <Link to="/register">Cadastrar clientes</Link>
          </button>
        </div>
      );
    }
    return (
      <div>
        {this.sortedCostumers().map((costumer) => {
          const {
            name, email, age, id,
          } = costumer;
          return (
            <div key={email}>
              <p>{`Nome: ${name}`}</p>
              <p>{`Idade: ${age}`}</p>
              <p>{`E-mail: ${email}`}</p>
              <button
                type="button"
                onClick={() => dispatchRemove(id)}
              >
                X
              </button>
            </div>
          );
        })}
        <button
          type="button"
        >
          <Link to="/register">Cadastrar clientes</Link>
        </button>
        <button
          type="button"
          onClick={this.sortCostumers}
        >
          Ordenar
        </button>
      </div>
    );
  }
}

CostumersList.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  dispatchRemove: PropTypes.func.isRequired,
  costumers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
  costumers: state.costumerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemove: (costumerId) => dispatch(removeCostumer(costumerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CostumersList);
