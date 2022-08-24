import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    const { subReddit } = this.props;
    return (
      <div>
        {`Selected: ${subReddit}`}
        {' '}
      </div>
    );
  }
}

Title.propTypes = {
  subReddit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  subReddit: state.redditReducer.subReddit,
});

export default connect(mapStateToProps)(Title);
