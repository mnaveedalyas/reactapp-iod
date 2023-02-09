import React from "react";

export default function LiftingUpState() {

    const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);    
    return (
        <div>
        <TodoCount todos={todos} />
        <TodoList todos={todos} />
        <AddTodo setTodos={setTodos}  />
        </div>
    );
}

function TodoCount({ todos }) {
  return <div>Total Todos: {todos.length} </div>;
}

function TodoList({ todos }) {
  //const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  
    function handleSubmit(event) {
        event.preventDefault();
        const todo = event.target.elements.todo.value;
        console.log(todo);
        setTodos(prevTodos => [...prevTodos, todo]);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" id="todo" />
        <button type="submit">Add Todo</button>
        </form>
    );
}