import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div>
        {/* Add a header or navigation bar here */}
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Define your routes using the Routes component */}
        <Route>
          <Route path="/" exact component={Routes} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
