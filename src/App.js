import React from 'react';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="App">
        <Header />
        <Route path="/" component={Feed} exact/>
        <Route path="/profile" component={Profile} exact/>
      </header>
    </Router>
  );
}

export default App;
