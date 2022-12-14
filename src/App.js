import { useState } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Todo from './components/Todo.js';
import TodoList from './components/TodoList.js';
import './App.scss';

function App() {

  // Track state of todos and count
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-body-wrapper">
        <div className="page-body">
          <div className="page-heading">
            <h1>TODO</h1>
          </div>
          <Todo
            todo={todo}
            setTodo={setTodo}
            todoList={todoList}
            setTodoList={setTodoList}
            todoCount={todoCount}
            setTodoCount={setTodoCount}
          />
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            todoCount={todoCount}
            setTodoCount={setTodoCount}
            completedCount={completedCount}
            setCompletedCount={setCompletedCount}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
