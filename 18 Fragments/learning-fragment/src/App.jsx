import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";


function App() {

  let [foodItems,setFoodItems]=useState([]);

    const onKeyDown =(event) =>{
      if (event.key ==="Enter"){
        let newFoodItem=event.target.value;
        event.target.value ="";
        let newItems=[...foodItems,newFoodItem];
        setFoodItems(newItems);
      };
 
  }




return (
  <>
  <Container>
  
    <h1 className="food-heading">Healthy Food</h1>
    
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    
   
    </Container>
    </>
);
}

export default App;



// import React from "react";

// let foodItems = [{ test: "hardik", test1: "viki" }];

// function App() {

//   const arrayDataItems = foodItems.map((course) => <li>{course.test} {course.test1}</li>);
  
//   return(
//     arrayDataItems
//   );


// }

// export default App;



