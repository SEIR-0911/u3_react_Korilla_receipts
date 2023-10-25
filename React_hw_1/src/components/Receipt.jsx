//the component shows the relevant information for that section of the website

export default function receipts(props) {
  console.log(props);
  return (
    <ul>
      {props.receipts.map((receipt) => (
        <li class="flex">
          <h5 className="receipt" id={receipt.id}>
            <div>key = {receipt.id}</div>
            <div>person = {receipt.person}</div>
            <div>order = {receipt.order.main}</div>
            <div>protein = {receipt.order.protein}</div>
            <div>rice = {receipt.order.rice}</div>
            <div>sauce = {receipt.order.sauce}</div>
            <div>drink = {receipt.order.drink}</div>
            <div>cost = {receipt.order.cost}</div>
          </h5>
        </li>
      ))}
    </ul>
  );
}
