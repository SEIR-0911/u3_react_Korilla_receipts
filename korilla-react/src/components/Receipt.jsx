const Receipt = (props) => {
    return (
        <div className="receipt">
            <h3>{props.person}</h3>
            <p><span>Main:</span> {props.order.main}</p>
            <p><span>Protein:</span> {props.order.protein}</p>
            <p><span>Rice:</span> {props.order.rice}</p>
            <p><span>Sauce:</span> {props.order.sauce}</p>
            <p><span>Drink:</span> {props.order.drink}</p>
            <p><span>Cost:</span> ${props.order.cost}</p>
        </div>
    )
}

export default Receipt