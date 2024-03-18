import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  
   let foodItems=["sabzi","roti","Roti","salad","green Vegetable","orange","apple"];
    // let foodItems = [{ test: "hardik", test: "viki" }];



    
    
    
    //  let foodItems=[];

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



// import React from "react";

// let foodItems = [{ test: "hardik", test1: "viki" }];

// function App() {

//   const arrayDataItems = foodItems.map((course) => <li>{course.test} {course.test1}</li>);
  
//   return(
//     arrayDataItems
//   );


// }

// export default App;



