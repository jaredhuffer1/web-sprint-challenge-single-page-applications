import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to the Delicious Pizza Shop!</h2>
      <p>
        We offer a variety of pizza toppings to suit everyone's taste buds.
        Click on the links above to place your order or to see our featured items.
      </p>
      <Link to="/pizza" id="order-pizza">
        Order Pizza
      </Link>
    </div>
  );
}

export default HomePage;
