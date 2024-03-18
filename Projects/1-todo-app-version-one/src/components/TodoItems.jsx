import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="todo-container">
      {todoItems.map((item) => (
        <TodoItem tododate={item.Duedate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
