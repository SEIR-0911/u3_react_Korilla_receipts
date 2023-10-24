
const Receipt = (props) => {
   const { id, person, order } = props

   return (
      <>
      <div className="card">
         <p>Customer #: { id }</p>
         <p>Customer Name: { person }</p>
         <p>Customer Order:</p>
         <ul>
            <li>Main: { order.main }</li>
            <li>Rice: { order.rice }</li>
            <li>Sauce: { order.sauce }</li>
            <li>Toppings: { order.toppings.join(', ') }</li>
            <li>Drink: { order.drink }</li>
            <li>Cost: ${ order.cost }</li>
         </ul>
      </div>
      </>
   )
}

export default Receipt
