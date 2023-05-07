
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';
import Header from './Header';
import Footer from './Footer';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pizza" component={PizzaForm} />
        <Route path="/my-component" component={MyComponent} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
