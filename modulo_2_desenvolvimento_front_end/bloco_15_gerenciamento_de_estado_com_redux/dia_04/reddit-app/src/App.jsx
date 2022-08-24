import React from 'react';
import Posts from './components/Posts';
import Refresh from './components/Refresh';
import Select from './components/Select';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Select />
        <Refresh />
        <Posts />
      </div>
    );
  }
}

export default App;
