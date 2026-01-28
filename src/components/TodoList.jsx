import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
