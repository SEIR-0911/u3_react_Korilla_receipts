const Receipt = (props) => {
  

    return (
      <div className="receipt">
        {props.receipts.map((receipt, index) => (
  
          
          <div key={index}  >
            <p>Name:{receipt.person}</p>
            <p>Main:{receipt.order.main}</p>
            <p>Protein:{receipt.order.protein}</p>
            <p>Rice:{receipt.order.rice}</p>
            <p>Sauce:{receipt.order.sauce}</p>
            <p>Drink:{receipt.order.drink}</p>
            <p>Cost:{receipt.order.cost}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Receipt;
  
    