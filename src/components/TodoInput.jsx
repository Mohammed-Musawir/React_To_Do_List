import { useState } from "react";
import styles from "./TodoInput.module.css";

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  function handleAdd() {
    onAdd(value);
    setValue("");
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New task..."
      />
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
