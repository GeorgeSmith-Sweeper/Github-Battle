import React from 'react';
import Popular from './Popular';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <Popular />
      </div>
    );
  }
}

module.exports = App;
