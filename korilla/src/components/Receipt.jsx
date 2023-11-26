import React from 'react'

const Receipt = ({ receipt }) => {
  const { person, order } = receipt

  return (
    <div className="receipt">
      <h3>{person}'s Receipt</h3>
      <p>
        <h3>Main:</h3> {order.main}
      </p>
      <p>
        <h3>Protein:</h3> {order.protein}
      </p>
      <p>
        <h3>Rice:</h3> {order.rice || 'None'}
      </p>
      <p>
        <h3>Sauce:</h3> {order.sauce}
      </p>
      <p>
        <h3>Drink:</h3> {order.drink}
      </p>
      <p>
        <h3>Cost:</h3> ${order.cost}
      </p>
    </div>
  );
};

export default Receipt