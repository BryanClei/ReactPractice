import { useState } from "react";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const prices = {
    reactCourse: 49.99,
    vueCourse: 39.99,
  };

  const handleAddReactCourse = () => {
    setCartItems({
      ...cartItems,
      reactCourse: cartItems.reactCourse + 1,
    });
  };

  const handleAddVuetCourse = () => {
    setCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  return (
    <div>
      <h2>Shopping cart component</h2>
      <ProducCard
        name="React Course"
        price={49.99}
        quantity={cartItems.reactCourse}
        onAddToCart={handleAddReactCourse}
      />

      <ProducCard
        name="Vue Course"
        price={39.99}
        quantity={cartItems.vueCourse}
        onAddToCart={handleAddVuetCourse}
      />

      <CartSummary cartItems={cartItems} prices={prices} />
    </div>
  );
};

export const ProducCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  console.log(["cartItems: ", cartItems, "prices: ", prices]);
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;

  const totalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
};
