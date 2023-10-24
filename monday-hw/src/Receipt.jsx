const Receipt = (props) => {
  return (
    <div className='receipt-container-content'>
      <h2>{props.person}</h2>
      <ul className='person-list'>
        <li> Main: {props.main}</li>
        <li> Protein: {props.protein}</li>
        <li>Rice: {props.rice}</li>
        <li>Sauce: {props.sauce}</li>
        <li> Drink: {props.drink}</li>
        <li>Cost: ${props.cost}</li>
      </ul>
      <button onClick={() => props.payReceipt(props.id)} className='pay-button'>
        Pay
      </button>
    </div>
  );
};
export default Receipt;
