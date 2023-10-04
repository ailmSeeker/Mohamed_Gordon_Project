// src/Routes.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Protected} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setAuthenticated={setAuthenticated} />
          )}
        />
        {/* Protect routes using the authenticated state */}
        {authenticated && (
          <Route path="/protected" component={Protected} />
        )}
      </Route>
    </Router>
  );
}

export default Routes;
