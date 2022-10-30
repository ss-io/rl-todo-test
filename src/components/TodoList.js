import React from 'react';
import './TodoList.scss';

const TodoList = ({todoList, setTodoList}) => {

  // Function to change todo status to complete
  const handleComplete = (tid) => {
    // Create a new list after change the todo item complete status
    let newTodoList = todoList.map((item) => {
      if(item.tid === tid) {
        //Set taks status to complete.
        item.completed = !item.completed;
      }
      return item;
    });

    // Set new list in state
    setTodoList(newTodoList);
  };

  // Function to delete todo
  const handleDelete = (tid) => {
    // Create a new list after filter out the match one
    let newTodoList = todoList.filter((item) => {
      if(item.tid !== tid) {
        return item;
      }
    });

    // Set new list in state
    setTodoList(newTodoList);
  };


  return (
    <div className="todo-list-wrapper">
        {
          // Check if todo list has items
          todoList?.length > 0 ? (
            <ul className="todo-list">
            {
              // Loop through the list and display each todo items
              todoList.map((item) => (
                <li key={item.tid} className="todo-item-wrapper">
                  <div className="todo-item">
                    <div className="todo-item--left">
                      <input id={ item.tid } type="checkbox" onClick={() => handleComplete(item.tid)}/>
                      <label htmlFor={ item.tid }>
                        { item.name }
                        <span>{ item.date }</span>
                      </label>
                    </div>
                    <div className="todo-item--right">
                      { Object.keys(item.priority) }
                      <button type="button" onClick={() => handleDelete(item.tid)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/> </g> </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))
            }
            </ul>
          ) : (
            <div className="todo-list-msg">
              No todo is found
            </div>
          )
        }
    </div>
  )
}

export default TodoList;

