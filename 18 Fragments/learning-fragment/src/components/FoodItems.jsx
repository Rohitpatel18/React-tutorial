import Item from "./Item";

const FoodItems=({items}) =>{

    //let foodItems=["Dal","Milk","Roti","salad","green Vegetable","orange"];

    return (<ul className='list-group'>
    {items.map((item)=> (
      <Item key={item} foodItems={item}></Item>
    ))}
   
  </ul>
    );
};

export default FoodItems;