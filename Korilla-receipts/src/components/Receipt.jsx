const Receipt = (props) => {

const data = {person, order, main, protein, rice, sauce, drink, cost}

    return (
    <div className="receipt">
        <h2>Receipt</h2>
        <div className="receipt-data">
            <p>Person: {person}</p>
            <p>Order: {order}</p>
            <p>Main: {main}</p>
            <p>Protein: {protein}</p>
            <p>Rice: {rice}</p>
            <p>Sauce: {sauce}</p>
            <p>Drink: {drink}</p>
            <p>Cost: {cost}</p>
        </div>
    </div>
    )
}

export default Receipt