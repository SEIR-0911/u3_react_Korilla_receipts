export default function Receipt (props) {

    if (props.paid == false) {
        return (
            <div className="receipt">
                <h2>Name: {props.person} </h2>
                <p>Main: {props.main}</p>
                <p>Protein: {props.protein}</p>
                <p>Rice: {props.rice}</p>
                <p>Sauce: {props.sauce}</p>
                <p>Toppings: {props.toppings.join(", ")}</p>
                <p>Drink: {props.drink}</p>
                <p>Cost: $ {props.cost}</p>
            </div>
        )
    }
}