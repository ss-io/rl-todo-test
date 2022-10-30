import React from 'react';
import './TodoList.scss';

const TodoList = ({todoList, setTodoList, todoCount, setTodoCount, completedCount, setCompletedCount}) => {

  // Function to change the order of the list
  const handleSort = (event) => {
    // Get value selected
    const sortby = event.target.value;

    switch(sortby) {
      default:
        break;

      case 'byname-asc':
        // Sort list in ascending order
        let nameAsc = [...todoList].sort((a, b) =>
          a.name > b.name ? 1 : -1,
        );
        // Set state
        setTodoList(nameAsc);
        break;

      case 'byname-desc':
        // Sort list in ascending order
        let nameDesc = [...todoList].sort((a, b) =>
          a.name > b.name ? -1 : 1,
        );
        // Set state
        setTodoList(nameDesc);
        break;

      case 'bypriority-asc':
        // Sort list in ascending order
        let priorityAsc = [...todoList].sort((a, b) =>
          Object.values(a.priority) > Object.values(b.priority) ? 1 : -1,
        );
        // Set state
        setTodoList(priorityAsc);
        break;

      case 'bypriority-desc':
        // Sort list in ascending order
        let priorityDesc = [...todoList].sort((a, b) =>
          Object.values(a.priority) > Object.values(b.priority) ? -1 : 1,
        );
        // Set state
        setTodoList(priorityDesc);
        break;
    }
  };


  // Function to change todo status to complete
  const handleComplete = (tid) => {
    // Create a new list after change the todo item complete status
    let newTodoList = todoList.map((item) => {
      if(item.tid === tid) {
        //Set taks status to complete.
        item.completed = !item.completed;

        // Keep track of completed tasks
        (item.completed) ? setCompletedCount(completedCount + 1) : setCompletedCount(completedCount - 1);
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
      else {
        // Reset the completed count if deleted todo already completed.
        (item.completed) && setCompletedCount(completedCount - 1);
        return null;
      }
    });

    // Set new list in state
    setTodoList(newTodoList);

    // Keep track of the total number of todos
    setTodoCount(todoCount - 1);
  };


  return (
    <div className="todo-list-wrapper">
        {
          // Check if todo list has items
          todoList?.length > 0 ? (
            <>
              <div className="todo-list-info">
                <div className="todo-list-info--p1">
                  <select onChange={handleSort}>
                    <option value="">Sort by...</option>
                    <option value="byname-asc">name - a to z</option>
                    <option value="byname-desc">name - z to a</option>
                    <option value="bypriority-asc">priority - low to high</option>
                    <option value="bypriority-desc">priority - high to low</option>
                  </select>
                </div>
                <div className="todo-list-info--p2">
                  <span>Total: {todoCount}</span>
                  <span>Completed: {completedCount}</span>
                  <span>Remaining: {todoCount - completedCount}</span>
                </div>
              </div>
              <ul className="todo-list">
              {
                // Loop through the list and display each todo items
                todoList.map((item) => (
                  <li key={item.tid} className="todo-item-wrapper">
                    <div className="todo-item">
                      <div className="todo-item--left">
                        <input id={ item.tid } type="checkbox" onClick={() => handleComplete(item.tid)}/>
                        <label htmlFor={ item.tid } className={item.completed ? 'strike-through' : ''}>
                          { item.completed }
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
            </>
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

