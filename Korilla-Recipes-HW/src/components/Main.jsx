import Receipt from './Receipt'

const Main = (props) => {

    const receiptComponents = props.receipts.map((receipt, index) => {
        return (
            <Receipt 
                receiptData={receipt}
                index={index}
                key={index}
            />
        )
    })

    console.log(receiptComponents)


    return (
    <div className='main'>
        {receiptComponents}
    </div>
      
    )}




export default Main