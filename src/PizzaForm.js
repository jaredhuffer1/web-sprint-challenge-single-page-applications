import React, { useState } from 'react';

function PizzaForm() {
    const [name, setName] = useState('');
    const [size, setSize] = useState('Small');
    const [toppings, setToppings] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
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
      
        // check if name is at least 2 characters long
        if (name.length < 2) {
          // display error message
          const errorMessage = document.querySelector('#name-error-message');
          errorMessage.style.display = 'block';
          return;
        }
      
        const order = {
          name,
          size,
          toppings,
          specialInstructions,
        };
      
        console.log(order);
        fetch('https://reqres.in/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            alert('Your order has been submitted successfully!');
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your order. Please try again.');
          });
      };
      
      
      
  
    return (
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
<input type="text" id="name-input" value={name} onChange={handleNameChange} minLength="2" required />
{ name.length < 2 && <p className="error-message">name must be at least 2 characters</p> }

  
        <label htmlFor="size-dropdown">Size:</label>
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
  
        <label>Toppings:</label>
        <div>
          <input type="checkbox" id="pepperoni" value="Pepperoni" onChange={handleToppingsChange} />
          <label htmlFor="pepperoni">Pepperoni</label>
        </div>
        <div>
          <input type="checkbox" id="mushroom" value="Mushroom" onChange={handleToppingsChange} />
          <label htmlFor="mushroom">Mushroom</label>
        </div>
        <div>
          <input type="checkbox" id="sausage" value="Sausage" onChange={handleToppingsChange} />
          <label htmlFor="sausage">Sausage</label>
        </div>
        <div>
          <input type="checkbox" id="olives" value="Olives" onChange={handleToppingsChange} />
          <label htmlFor="olives">Olives</label>
        </div>
  
        <label htmlFor="special-text">Special Instructions:</label>
        <textarea id="special-text" value={specialInstructions} onChange={handleSpecialInstructionsChange} />
  
        <button type="submit">Submit Order</button>
      </form>
    );
  }
  
  export default PizzaForm;
  
