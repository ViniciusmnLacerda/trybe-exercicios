import PropTypes from 'prop-types';
import React from 'react';

function Item(props) {
  const { content } = props;
  return (
    <div className="Item">
      { content }
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
