function Receipt(props){

    return(
        <div className='receipt'>
            <h1 className='person'>{props.person}</h1>
            <ul className='order'>
                <li className='main'><span className='key'>Main:</span> {props.main}</li>
                <li className='protein'><span className='key'>Protein:</span> {props.protein}</li>
                <li className='rice'>Rice: {props.rice}</li>
                <li className='toppings'><span className='key'>Toppings:</span> {props.toppings.join(', ')}</li>
                <li className='sauce'><span className='key'>Sauce:</span> {props.sauce}</li>
                <li className='drink'><span className='key'>Drink:</span> {props.drink}</li>
            </ul>
            <p className='cost'>Cost: ${props.cost}</p>
        </div>
    )
}

export default Receipt