import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <button
        type="button"
      >
        <Link to="/login">Fazer Login</Link>
      </button>
    );
  }
}

export default Home;
