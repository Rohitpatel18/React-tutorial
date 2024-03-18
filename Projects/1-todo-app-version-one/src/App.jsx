import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
// import TodoItem from "./components/TodoItem";
import './App.css';
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems=[
    {
      Duedate:"4/10/2023",
      name:"Buy Milk"
    },
    {
      Duedate:"4/10/2023",
      name:"Go to collage"
    },
    {
      name:"like this video",
      Duedate:"right now "
    }

  ];



  
  return  <center 
  className="todo-container">
   <AppName />
   <AddTodo />
   <TodoItems todoItems={todoItems}></TodoItems>

  </center>
  
}

export default App
