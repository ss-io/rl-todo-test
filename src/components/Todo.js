import React from 'react';
import './Todo.scss';

const Todo = ({todo, setTodo, todoList, setTodoList, todoCount, setTodoCount}) => {

  // Function handle user input
  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  // Function handle form submit
  const handleTodoSubmit = (event) => {
    // Prevent form default event
    event.preventDefault();

    const target = event.target.todo_priority;
    const selected = target.options.selectedIndex;

    const todoPriority = {};
    todoPriority[target.value] = target.options[selected].dataset.order;

    // Add todo list into state
    setTodoList([...todoList, {
      tid: Date.now(),
      name: todo,
      //priority: event.target.todo_priority.value,
      priority: todoPriority,
      date: new Date().toLocaleString('en-AU', {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: 'numeric'
      }),
      completed: false
    }]);

    // Reset todo
    setTodo('');

    // Keep track of the total number of todos
    setTodoCount(todoCount + 1);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-form-wrapper">
        <form className="todo-form" onSubmit={handleTodoSubmit}>

          <input
            type="text"
            name="todo_name"
            placeholder="Enter a todo task..."
            className="form-control-input"
            value={todo}
            required
            onChange={handleInputChange}
          />

          <select name="todo_priority">
            <option value="low" data-order="1">low</option>
            <option value="medium" data-order="2">medium</option>
            <option value="high" data-order="3">high</option>
          </select>

          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/> </g> </svg>
          </button>

        </form>
      </div>
    </div>
  )
}

export default Todo;

