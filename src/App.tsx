// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home'; // Example component
import About from './page/About'; // Example component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes for additional pages */}
      </Switch>
    </Router>
  );
}

export default App;
