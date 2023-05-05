import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pizza" activeClassName="active">Order a Pizza</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <h1>Welcome to our pizza shop!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
