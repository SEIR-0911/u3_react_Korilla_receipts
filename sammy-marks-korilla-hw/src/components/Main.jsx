import Receipt from "./Receipt"



const Main = (props) => {

    console.log("props.Array", props.receiptsArray)

    const receiptComponents = props.receiptsArray.map((receipt, index) => {
        return (

            <Receipt 
                receiptData={receipt}
                index={index}
                key={index}   
            />

        )
    })

    return (
        <div className='main'>
            {receiptComponents}
        </div>
    )

  }

export default Main
  