import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const App = () => (
  <Router>
    <Route path="/" component={HomePage} />
  </Router>
);

export default App;
