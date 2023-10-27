const Receipt = () => {
  const receipts = [
    {
      id: 1,
      person: "Jeremy",
      order: {
        main: "Burrito",
        protein: "Skirt Steak",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Thai Iced Tea",
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: "Brittany",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Chicken",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: "Tom",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20,
      },
      paid: false,
    },
    {
      id: 4,
      person: "John",
      order: {
        main: "Burrito Bowl",
        protein: "Carnitas",
        rice: "yellow rice",
        sauce: "Jalapeno Honey",
        toppings: ["Grilled Corn", "Pico De Gallo", "Guacamole"],
        drink: "Pineapple Jarritos",
        cost: 23,
      },
      paid: true,
    },
  ];

  return (
    <div className="receipt">
      {receipts.map((receipt, index) => (
        <div  >
          <p>Name:{receipt.person}</p>
          <p>Main:{receipt.order.main}</p>
          <p>Protein:{receipt.order.protein}</p>
          <p>Rice:{receipt.order.rice}</p>
          <p>Sauce:{receipt.order.sauce}</p>
          <p>Drink:{receipt.order.drink}</p>
          <p>Cost:{receipt.order.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default Receipt;
