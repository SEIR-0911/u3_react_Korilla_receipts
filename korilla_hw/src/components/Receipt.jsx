export default function Receipt(props) {
    if (props.receipt.paid ==false) {
    return(
        <div className="Receipt">
            <h3>{props.receipt.person}</h3>
            <p>Main: {props.receipt.order.main}</p>
            <p>Protein: {props.receipt.order.protein}</p>
            <p>Rice: {props.receipt.order.rice}</p>
            <p>Sauce: {props.receipt.order.sauce}</p>
            <p>Drink: {props.receipt.order.drink}</p>
            <p>Cost: ${props.receipt.order.cost}</p>
        </div>
    )}
}