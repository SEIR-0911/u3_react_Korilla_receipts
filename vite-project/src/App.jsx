import { useState } from 'react'
import './App.css'
import Receipt from './components/Receipt'
import RECEIPTS from './receiptsData'
import NEWRECEIPTS from './newReceipts'

function App() {

 const [receipts, setReceipts] = useState(RECEIPTS)

 const allReceipts = receipts.map(receipt => (
        !receipt.paid ?
        <Receipt key={receipt.id} person={receipt.person}
        main={receipt.order.main}
        protein={receipt.order.protein}
        rice={receipt.order.rice}
        sauce={receipt.order.sauce}
        drink={receipt.order.drink}
        cost={receipt.order.cost}
        paid={receipt.paid}
        /> : null
 ))

 function handleReceipts () {
  setReceipts([...receipts, ...NEWRECEIPTS])
 }
  return (

      <div className='main-content'>
        <div btn-wrapper>
          <button onClick={handleReceipts}>New Receipts</button>
        </div>
        {allReceipts}
      </div>

  )
}
export default App
