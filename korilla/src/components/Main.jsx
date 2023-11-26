import { useState } from "react"
import Receipt from './Receipt'

const Main = ({ receipts }) => {
  return (
    <div className="main">
      {receipts.map((receipt) => (
        <Receipt key={receipt.id} receipt={receipt} />
      ))}
    </div>
  );
};

export default Main