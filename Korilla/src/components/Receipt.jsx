const Receipt = (props) => {
    return (
<div className="receipt">
  <div className="receipt-header">
    <h1>{props.person}</h1>
    <span>${props.order.cost}</span>
  </div>
  <div className="receipt-body">
    <div className="details">
      <p><strong>Main:</strong> {props.order.main}</p>
      <p><strong>Protein:</strong> {props.order.protein}</p>
      <p><strong>Rice:</strong> {props.order.rice}</p>
      <p><strong>Sauce:</strong> {props.order.sauce}</p>
      <p><strong>Drink:</strong> {props.order.drink}</p>
    </div>
    <div className="toppings">
      <h2>Toppings:</h2>
      <ul>
        {props.order.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
    )
  }
  export default Receipt;
  
