
export default function Receipt (props) {
    const receipt = props.receipt
    return (
        <div>
            <h2 className="person">{receipt.person}</h2>
            <h3 className="main">Main: {receipt.order.main}</h3>
            <p className="protein">Protein: {receipt.order.protein}</p>
            <p className="rice">Rice: {receipt.order.rice}</p>
            <p className="sauce">Sauce: {receipt.order.sauce}</p>
            <p className="drink">Drink: {receipt.order.drink}</p>
            <p className="cost">Cost: {receipt.order.cost}</p>

            <p className="toppings">Toppings: {receipt.order.toppings}</p>

        </div>
    )
}