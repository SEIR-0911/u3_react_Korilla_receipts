import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RECEIPTS from './ReceiptsData.js'
import Receipt from './Receipt'

function App() {
  const [allReceipts, setAllReceipts] = useState(RECEIPTS)

  const newReceipts = [{
    id: 5,
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 6,
    person: 'Mark',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: true,
  }]

  const receipts = allReceipts.map(receipt => (
    !receipt.paid ?
    <Receipt key={receipt.id} person= {receipt.person}
    main= {receipt.order.main}
    protein= {receipt.order.protein}
    rice= {receipt.order.rice}
    sauce= {receipt.order.sauce}
    drink= {receipt.order.drink}
    cost= {receipt.order.cost}/>:null
  ))

function addReceipts() {
  setAllReceipts([...allReceipts, ...newReceipts])
}

  return (
    <>
      <main>
        <button className= "add" onClick={addReceipts}>Add receipt</button>
        <div className="receipt-container">
        {receipts}
        </div>
      </main>
      
    </>
  )
}

export default App