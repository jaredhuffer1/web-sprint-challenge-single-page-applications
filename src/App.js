import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
          <a href="#">Pepperoni</a>
          <a href="#">Mushroom</a>
          <a href="#">Sausage</a>
        </div>
      </Header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="/my-component" element={<MyComponent />} />
      </Routes>
      <Footer>
        <div className="pizza-links-footer">
          <a href="#">Hawaiian</a>
          <a href="#">Meat Lovers</a>
          <a href="#">Veggie</a>
        </div>
        <p>Delicious Pizza Shop &copy; 2023</p>
      </Footer>
    </div>
  );
}

export default App;
