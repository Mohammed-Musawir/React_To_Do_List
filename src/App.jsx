import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text }]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function editTodo(id, newText) {
    if (!newText.trim()) return;
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

export default App;
