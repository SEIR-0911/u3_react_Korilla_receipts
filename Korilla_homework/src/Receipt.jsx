const Receipt = (props) => {

    return (
        <div className="eachReceipt">
            <h2>{props.person}</h2>
            <ul>
                <li><b>Main:</b> {props.main}</li>
                <li><b>Protein:</b> {props.protein}</li>
                <li><b>Rice:</b> {props.rice}</li>
                <li><b>Sauce:</b> {props.sauce}</li>
                <li><b>Drink:</b>{props.drink}</li>
                <li><b>Cost:</b> ${props.cost}</li>
            </ul>
        </div>
    )
}

export default Receipt