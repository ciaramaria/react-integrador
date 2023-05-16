import React, { useState } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 19.99, quantity: 1 },
    // Agrega más elementos al carrito aquí
  ]);

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));

  // Calcula el precio total de los elementos en el carrito
  function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice.toFixed(2);
  }

  // Actualiza la cantidad de un elemento en el carrito
  function updateQuantity(itemId, quantity) {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    setTotalPrice(calculateTotalPrice(updatedItems));
  }

  // Elimina un elemento del carrito
  function removeItem(itemId) {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    setTotalPrice(calculateTotalPrice(updatedItems));
  }

  // Renderiza la lista de elementos en el carrito
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id}>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    ));
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {renderCartItems()}
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Checkout;