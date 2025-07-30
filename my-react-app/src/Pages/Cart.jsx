import React from "react";
import { useCart } from "react-use-cart";
import './Cart.css'; 

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="empty-cart">Your Cart is Empty</h1>;

  return (
    <section className="cart-section">
      <div className="cart-container">
        <div className="cart-header">
          <h5>
            Cart ({totalUniqueItems}) — Total Items: {totalItems}
          </h5>
        </div>
        <table className="cart-table">
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="cart-row">
                <td>
                  <img src={item.image} alt="" className="cart-image" />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>Quantity ({item.quantity})</td>
                <td>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Remove Item</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <h2>Total Price: ${cartTotal.toFixed(2)}</h2>
        </div>
        <div className="cart-actions">
          <button onClick={() => emptyCart()} className="clear-cart-btn">Clear Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;