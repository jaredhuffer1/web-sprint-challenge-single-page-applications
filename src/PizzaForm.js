import React, { useState } from 'react';

function PizzaForm() {
    const [form, setForm] = useState({
        name: '',
        size: 'Small',
        toppings: {
            Pepperoni: false,
            Mushroom: false,
            Onion: false,
            Sausage: false,
            blackOlives: false,


        },
        special: ''
    });

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} />
                </label>
                <br />
                <label>
                    Size:
                    <select value={form.size} onChange={event => setForm({ ...form, size: event.target.value })}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="NewYorkStyle">New York Style</option>
                    </select>
                </label>
                <br />
                <label>
                    Toppings:
                    <br />
                    <input type="checkbox" checked={form.toppings.Pepperoni} onChange={() => setForm({ ...form, toppings: { ...form.toppings, Pepperoni: !form.toppings.Pepperoni } })} />
                    <span>Pepperoni</span>
                    <br />
                    <input type="checkbox" checked={form.toppings.Mushroom} onChange={() => setForm({ ...form, toppings: { ...form.toppings, Mushroom: !form.toppings.Mushroom } })} />
                    <span>Mushroom</span>
                    <br />
                    <input type="checkbox" checked={form.toppings.Onion} onChange={() => setForm({ ...form, toppings: { ...form.toppings, Onion: !form.toppings.Onion } })} />
                    <span>Onion</span>
                    <br />
                    <input type="checkbox" checked={form.toppings.Sausage} onChange={() => setForm({ ...form, toppings: { ...form.toppings, Sausage: !form.toppings.Sausage } })} />
                    <span>Sausage</span>
                    <br/>
                    <input type="checkbox" checked={form.toppings.Pepperoni} onChange={() => setForm({ ...form, toppings: { ...form.toppings, Pepperoni: !form.toppings.Pepperoni } })} />
                    <span></span>
                    <br/>
                    <input type="checkbox" checked={form.toppings.blackOlives} onChange={() => setForm({ ...form, toppings: { ...form.toppings, blackOlives: !form.toppings.blackOlives } })} />
                    <span>Black Olives </span>
                </label>
                <br />
                <label>
                    Special Instructions:
                    <textarea value={form.special} onChange={event => setForm({ ...form, special: event.target.value })} />
                </label>
            </form>
        </div>
    );
}

export default PizzaForm;
