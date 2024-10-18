// onChange = Event handler used primarily with form elements.
//                       ex. <input>, <textarea>, <select>, <radio>
//                       Triggers a function every time the value of the input changes.

import React, { useState } from "react";

function MyComponent1() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [paymment, setPayments] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayments(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instruction"
      />
      <p>Comment: {comment}</p>

      <select value={paymment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {paymment}</p>

      <label htmlFor="Pickup">Pickup <input type="radio" id="Pickup" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingChange}/></label>
      <label htmlFor="Delivery">Delivery <input type="radio" id="Delivery" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/></label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent1;
