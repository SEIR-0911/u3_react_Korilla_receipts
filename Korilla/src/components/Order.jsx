export default function Order (props) {
    const receipt = props.receipt
    const order = props.receipt.order
    return (
        <div className="receipt">
            <h3>{receipt.person}</h3>   
            
                <p>Main: {order.main}</p>
                <p>Protein: {order.protein}</p>
                <p>Rice: {order.rice}</p>
                <p>Sauce: {order.sauce}</p>
                <p>Drink: {order.drink}</p>
                <p>Cost: ${order.cost}</p>
                <p>Toppings: {order.toppings.join(", ")}</p>
            
        </div>
    )
}