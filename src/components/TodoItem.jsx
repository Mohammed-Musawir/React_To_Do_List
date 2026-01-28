import { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    onEdit(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <li className={styles.item}>
      {isEditing ? (
        <>
          <input
            className={styles.editInput}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className={styles.actions}>
            <button className={styles.button} onClick={saveEdit}>💾</button>
            <button
              className={styles.button}
              onClick={() => setIsEditing(false)}
            >
              ❌
            </button>
          </div>
        </>
      ) : (
        <>
          <span className={styles.text}>{todo.text}</span>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>
            <button
              className={styles.button}
              onClick={() => onDelete(todo.id)}
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
