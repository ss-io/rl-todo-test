
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Todo from './components/Todo.js';
import TodoList from './components/TodoList.js';
import './App.scss';

function App() {


  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-body-wrapper">
        <div className="page-body">
          <Todo />
          <TodoList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
