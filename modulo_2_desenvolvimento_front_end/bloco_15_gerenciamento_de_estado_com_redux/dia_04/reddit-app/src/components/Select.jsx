/* eslint-disable class-methods-use-this */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubReddit, wichSubReddit } from '../store/actions';

class Select extends Component {
  handleChange = (event) => {
    const { dispatch } = this.props;
    const subReddit = event.target.value;
    dispatch(fetchSubReddit(subReddit));
    dispatch(wichSubReddit(subReddit));
  };

  render() {
    return (
      <select
        name="select"
        id="select"
        defaultValue=""
        onChange={(event) => this.handleChange(event)}
      >
        <option value="" disabled>Escolha um subreddit</option>
        <option value="reactjs">reactjs</option>
        <option value="frontend">frontend</option>
      </select>
    );
  }
}

Select.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Select);
