import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import React from 'react';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;


