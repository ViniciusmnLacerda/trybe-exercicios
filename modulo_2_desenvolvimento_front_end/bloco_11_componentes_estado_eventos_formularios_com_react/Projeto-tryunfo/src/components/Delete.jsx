import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component {
  render() {
    const { deleteCard, dataKey } = this.props;
    return (
      <div className="button-delete-container">
        <button
          className="button-delete"
          data-key={ dataKey }
          type="submit"
          data-testid="delete-button"
          onClick={ deleteCard }
        >
          <span className="span-form-delete-text">Excluir</span>
        </button>
      </div>
    );
  }
}

Delete.propTypes = {
  dataKey: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Delete;
