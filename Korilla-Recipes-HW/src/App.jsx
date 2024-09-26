
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const receipts = [
    {
      id: 1,
      person: 'Jeremy',
      image: "https://www.seriouseats.com/thmb/lOdEqFZsV3LOzX5Pc2Y6XCJuvTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__20201002-mission-style-burrito-jillian-atkinson-2-6841455590ed4c3981529b232166643a.jpg",
      order: {
        main: 'Burrito',
        protein: 'Skirt Steak',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Thai Iced Tea',
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: 'Brittany',
      image: "https://www.eatingwell.com/thmb/daIkvCfS-UVvTmoDYVGGbitqVwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orange-ginger-chicken-bowls-47914cf9350142f3bdb468e55f306143.jpg",
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Chicken',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: 'Tom',
      image: "https://nomoneynotime.com.au/uploads/recipes/shutterstock_1660883830-1.jpg",
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20,
      },
      paid: false,
    },
    {
      id: 4,
      person: 'John',
      image: "https://www.myketokitchen.com/wp-content/uploads/2019/10/Keto-Burrito-Bowl-Recipe-.jpg",
      order: {
        main: 'Burrito Bowl',
        protein: 'Carnitas',
        rice: 'yellow rice',
        sauce: "Jalapeno Honey",
        toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
        drink: 'Pineapple Jarritos',
        cost: 23,
      },
      paid: true,
    },
  ];





  return (
    <>
        <Header
        
        />
        <Main 
        receipts={receipts}
        />
    </>

  )
}

export default App
