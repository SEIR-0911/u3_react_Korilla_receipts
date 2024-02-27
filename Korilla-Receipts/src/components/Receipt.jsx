import React from 'react'

const Receipt = ({ receipt }) => {
  const { id, person, order, paid } = receipt

  return (
    <div className="receipt">
      <h3>{person}'s Order</h3>
      <p>Main: {order.main}</p>
      <p>Protein: {order.protein}</p>
      <p>Rice: {order.rice}</p>
      <p>Sauce: {order.sauce}</p>
      <p>Toppings: {order.toppings.join(', ')}</p>
      <p>Drink: {order.drink}</p>
      <p>Cost: ${order.cost}</p>
      {paid ? <p>Status: Paid</p> : <button>Mark as Paid</button>}
    </div>
  )
}

export default Receipt