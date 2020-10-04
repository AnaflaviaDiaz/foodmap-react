import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Toolbar from './components/toolbar/Toolbar';
import Restaurant from './components/restaurant/Restaurant';
import Search from './components/search/Search';

const App = () => {
  return (
  <Router>
    <Toolbar />
    <Switch>
      <Route exact path="/" component={Restaurant} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </Router>
  );
}

export default App;
