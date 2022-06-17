import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  // console.log(addTask, "addTask destructured");
  const [newTask, setNewTask] = useState("");
  // NOTE: do not delete `data-cy` key value pair

  const handleClick = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        value={newTask} //ye main nahi bhi likhunga tab bhi kam to chalega lekin bus input empty nahi hoga
        // onChange={({ target }) => setNewTask(target.value)}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
      />
      <button data-cy="add-task-button" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default AddTask;
