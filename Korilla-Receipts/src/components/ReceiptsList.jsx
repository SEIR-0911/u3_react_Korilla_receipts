import React from 'react'
import Receipt from './Receipt'

const ReceiptsList = ({ receipts }) => {
  return (
    <div className="receipts-list">
      <h2>Korilla</h2>
      {receipts.map((receipt) => (
        <Receipt key={receipt.id} receipt={receipt} />
      ))}
    </div>
  )
}

export default ReceiptsList