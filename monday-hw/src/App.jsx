import { useState } from "react";
import "./App.css";
import RECEIPTS from "./assets/data/Receipts.js";
import NEW_RECEIPTS from "./assets/data/NewReceipts.js";
import Receipt from "./Receipt";

function App() {
  const [allReceipts, setAllReceipts] = useState(RECEIPTS);

  function addReceipts() {
    console.log(NEW_RECEIPTS);
    console.log("adding more", allReceipts);

    setAllReceipts([...allReceipts, ...NEW_RECEIPTS]);
  }

  function payReceipt(id) {
    let unPaidReceipts = allReceipts.map((receipt) => {
      id === receipt.id ? (receipt.paid = true) : receipt.paid;
      return receipt;
    });
    console.log(unPaidReceipts);
    setAllReceipts(unPaidReceipts);
  }

  const receipts = allReceipts.map((receipt) =>
    !receipt.paid ? (
      <Receipt
        key={receipt.id}
        id={receipt.id}
        person={receipt.person}
        main={receipt.order.main}
        protein={receipt.order.protein}
        rice={receipt.order.rice}
        sauce={receipt.order.sauce}
        drink={receipt.order.drink}
        cost={receipt.order.cost}
        payReceipt={payReceipt}
      />
    ) : null
  );

  return (
    <main className='main-container'>
      <div>
        <h1 className='main-title'>Korilla</h1>
        <button className='add-new-receipts' onClick={addReceipts}>
          Add New Receipts
        </button>
        <div className='receipt-container'>{receipts}</div>
      </div>
    </main>
  );
}

export default App;
