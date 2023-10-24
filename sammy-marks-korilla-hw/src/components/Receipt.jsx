const Receipt = (props) => {
    const receipt = props.receiptData

    if (!receipt.paid) {        
        return (
            <div className="receipt">
                <h2 className="name">{receipt.person}</h2>
                <p className="item"><span className="item-category">Main: </span>{receipt.order.main}</p>
                <p className="item"><span className="item-category">Protien: </span>{receipt.order.main}</p>
                <p className="item"><span className="item-category">Rice: </span>{receipt.order.rice}</p>
                <p className="item"><span className="item-category">Sauce: </span>{receipt.order.sauce}</p>
                <p className="item"><span className="item-category">Toppings: </span>{receipt.order.toppings.join(", ")}</p>
                <p className="item"><span className="item-category">Drink: </span>{receipt.order.drink}</p>
                <p className="item"><span className="item-category">Cost: </span>${receipt.order.cost}</p>
            </div>
        )
    }
}
  
export default Receipt
