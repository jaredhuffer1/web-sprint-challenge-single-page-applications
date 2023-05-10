import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';
import Header from './Header';
import Footer from './Footer';
import MyComponent from './MyComponent';

import './App.css';

function App() {
  return (
    <div>
      <Header>
        <h1>Delicious Pizza Shop</h1>
        <div className="pizza-links">
          <Link to="/pizza">Pepperoni</Link>
          <Link to="/pizza">Mushroom</Link>
          <Link to="/pizza">Sausage</Link>
        </div>
      </Header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="/my-component" element={<MyComponent />} />
      </Routes>
      <Footer>
        <div className="pizza-links-footer">
          <Link to="/pizza">Hawaiian</Link>
          <Link to="/pizza">Meat Lovers</Link>
          <Link to="/pizza">Veggie</Link>
        </div>
        <p>Delicious Pizza Shop &copy; 2023</p>
      </Footer>
    </div>
  );
}

export default App;
