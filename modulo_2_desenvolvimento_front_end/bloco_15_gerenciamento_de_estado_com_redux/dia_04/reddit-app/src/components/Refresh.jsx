import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubReddit } from '../store/actions';

class Refresh extends Component {
  render() {
    const { dispatch, subReddit } = this.props;
    return (
      <button
        type="button"
        onClick={() => dispatch(fetchSubReddit(subReddit))}
        disabled={subReddit.length === 0}
      >
        Atualizar
      </button>
    );
  }
}

Refresh.propTypes = {
  subReddit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ subReddit: state.redditReducer.subReddit }
);

export default connect(mapStateToProps)(Refresh);
