import React from 'react';
import Person from './components/Person';

class App extends React.Component {
  render() {

    return (
      <React.StrictMode>
        <Person />
      </React.StrictMode>
    );
  }
}

export default App;