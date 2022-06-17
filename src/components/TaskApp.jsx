import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskData from "../data/tasks.json";
import { v4 } from "uuid";

const TaskApp = () => {
  const [tasks, setTasks] = useState(TaskData); //importing data from tasks.json
  // NOTE: do not delete `data-cy` key value pair
  const addTask = (newTask) => {
    let isTaskPresent = tasks.some((task) => task.text === newTask);
    // if(newTask) --> return false if newTask is empty
    if (newTask && !isTaskPresent) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]); // here i was adding the values to tasks
      console.log(tasks);
    }
  };
  // this will update the checkbox of every task
  const handleUpdateTask = (updatedTask) => {
    // let newTasks = tasks.reduce((acc, curr) => {
    //   if (curr.id === updatedTask.id) {
    //     acc.push(updatedTask);
    //   } else {
    //     acc.push(curr);
    //   }
    //   return acc;
    // }, []);
    // setTasks([...newTasks]);
    // console.log(newTasks);
    // -------we can do the same thing using both the methods --> either by using reduce or using map-----
    // Method 2
    let newTask = [];
    tasks.map((task) => {
      if (task.id === updatedTask.id) {
        newTask.push(updatedTask);
      } else {
        newTask.push(task);
      }
      return newTask;
    });
    setTasks([...newTask]); // here i am replacing array of old tasks with an array of newTask
    console.log(newTask);
  };

  const handleRemoveTask = (taskId) => {
    let remainingTask = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTask);
  };
  return (
    <div data-cy="task-app" className={styles.main}>
      <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          handleUpdateTask={handleUpdateTask} // it is just like genda bhaiya--> ye ek obj bana rahe hai--> jiska name bhi "handleUpdateTask" hai--> iske andar ek hi key hai or us key ka name bhi yahi hai "handleUpdateTask"--> or jo bhi main is obj main bhej raha hu vo is ek key ke andar value ke form main store ho jayegi
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};

export default TaskApp;
