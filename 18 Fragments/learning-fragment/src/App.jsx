import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  
    let foodItems=["sabzi","Milk","Roti","salad","green Vegetable","orange"];
    // let foodItems=[];

    // let emptyMessage=
    // foodItems.length === 0? <h3>I am  still hungry</h3> : null;


return (
  <>
  <React.Fragment>
    <h1 className="food-heading">Healthy Food</h1>
    {/* {emptyMessage} */}
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    
    </React.Fragment>
    </>
);
}

export default App
