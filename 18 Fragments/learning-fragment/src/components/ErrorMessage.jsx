const ErrorMessage  = ({items}) => {
    //let foodItems=["Dal","Milk","Roti","salad","green Vegetable","orange"];

    return  <>{items.length === 0? <h3>I am  still hungry</h3> : null}</>;

};


export default ErrorMessage;