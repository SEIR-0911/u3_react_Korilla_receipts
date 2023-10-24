
const Receipt = (props) => {
    console.log(props.receipts)



    return (


        
        <div className="mainDiv">

        <h1 className="name">Korilla</h1>
        <div className="receipts">
        
       {props.receipts.map(receipt =>
       <div id={receipt.person} className="indReceipts">
            <h2>{receipt.person}</h2>
            <p><span>Main:</span> {receipt.order.main}</p>
            <p><span>Protein:</span> {receipt.order.protein}</p>
            <p><span>Rice:</span> {receipt.order.rice}</p>
            <p><span>Sauce:</span> {receipt.order.sauce}</p>
            <p><span>Drink:</span> {receipt.order.drink}</p>
            <p><span>Cost:</span> ${receipt.order.cost}</p>
        </div>

        )}
        </div>

       </div>
       




    )
}
export default Receipt