import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  
   let foodItems=["sabzi","roti","Roti","salad","green Vegetable","orange","apple"];
    // let foodItems = [{ test: "hardik", test: "viki" }];
    let textToShow="Food Item Entered by user";
    
    const handleOnChange =(event) =>{
      console.log(event.target.value);
      textToShow=event.target.value;
  }




return (
  <Container>
  
    <h1 className="food-heading">Healthy Food</h1>
    
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodInput handleOnChange={handleOnChange}></FoodInput>
    <p>{textToShow}</p>
    <FoodItems items={foodItems}></FoodItems>
    
   
    </Container>
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



