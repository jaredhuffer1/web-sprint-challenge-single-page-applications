import React, { useState } from 'react';
import './PizzaForm.css';

function PizzaForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');

    const validateName = (name) => {
        if (name.length < 2) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const handleNameChange = (event) => {
      setName(event.target.value);
      validateName(event.target.value);
    };

    const handleNameBlur = (event) => {
      validateName(event.target.value);
    };

    const handleSizeChange = (event) => {
      setSize(event.target.value);
    };

    const handleToppingsChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setToppings([...toppings, value]);
      } else {
        setToppings(toppings.filter((topping) => topping !== value));
      }
    };

    const handleSpecialInstructionsChange = (event) => {
      setSpecialInstructions(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateName(name);
        if (nameError) {
          return;
        }
        const order = {
          name,
          size,
          toppings,
          specialInstructions,
        };
        fetch('https://reqres.in/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        })
        .then((response) => response.json())
        .then((data) => {
          alert('Your order has been submitted successfully!');
        })
        .catch((error) => {
          alert('There was an error submitting your order. Please try again.');
        });
    };

    return (
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" value={name} onChange={handleNameChange} onBlur={handleNameBlur} minLength="2" required />
        { nameError && <p className="error-message" id="name-error-message">name must be at least 2 characters</p> }

        <label htmlFor="size-dropdown">Size:</label>
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label>Toppings:</label>
        <div className="topping">
          <input type="checkbox" id="pepperoni" value="Pepperoni" onChange={handleToppingsChange} />
          <label htmlFor="pepperoni">Pepperoni</label>
        </div>
        <div className="topping">
          <input type="checkbox" id="mushroom"          value="Mushroom" onChange={handleToppingsChange} />
          <label htmlFor="mushroom">Mushroom</label>
        </div>
        <div className="topping">
          <input type="checkbox" id="sausage" value="Sausage" onChange={handleToppingsChange} />
          <label htmlFor="sausage">Sausage</label>
        </div>
        <div className="topping">
          <input type="checkbox" id="olives" value="Olives" onChange={handleToppingsChange} />
          <label htmlFor="olives">Olives</label>
        </div>

        <label htmlFor="special-text">Special Instructions:</label>
        <textarea id="special-text" value={specialInstructions} onChange={handleSpecialInstructionsChange} />

        <button id="order-button" type="submit">Submit Order</button>
      </form>
    );
}

export default PizzaForm;

