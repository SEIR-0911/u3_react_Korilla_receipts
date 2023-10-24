const Reciept = (props) => {
    return (
        <>
        {props.reciepts.map(reciept =>
            <div className="reciept">
                <h3>{reciept.person}</h3>
                <p><span>Main:</span> {reciept.order.main}</p>
                <p><span>Protein:</span> {reciept.order.protein}</p>
                <p><span>Rice:</span> {reciept.order.rice}</p>
                <p><span>Sauce:</span> {reciept.order.sauce}</p>
                <p><span>Toppings:</span> {reciept.order.toppings}</p>
                <p><span>Beverage:</span> {reciept.order.drink}</p>
                <p><span>Cost:</span> {reciept.order.cost}</p>
            </div>)}
        </>
    )
    
}
export default Reciept