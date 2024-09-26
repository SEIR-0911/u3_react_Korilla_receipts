const Receipt = (props) => {
    
    console.log(props)
    return (
      <div id={props.receiptData.id} className="receipt" >
        <h3>Receipt: {props.receiptData.name} </h3>

        <p id="order">Order:</p>
        <ul id="list">
            <li>Main: {props.receiptData.order.main}</li>
            <li> Protein: {props.receiptData.order.protein} </li>
            <li>Rice: {props.receiptData.order.rice}</li>
            <li>Sauce: {props.receiptData.order.sauce}</li>
            <li>Toppings:
                <p id="toppingsList"> {props.receiptData.order.toppings}</p></li>
            <li>{props.receiptData.order.drink}</li>
            </ul>
    
        <p>Cost: ${props.receiptData.order.cost}</p>
      </div>
    )
    }
      
      export default Receipt