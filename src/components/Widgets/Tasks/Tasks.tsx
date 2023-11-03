"use client";

import { useEffect, useState } from "react";
import styles from "./Tasks.module.scss";
import { v4 as uuidv4 } from "uuid";
import { TaskItem } from "./TaskItem/TaskItem";

interface ITask {
    id: string | number;
    text: string;
    completed: boolean;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        setLoading(true);
        const arr = JSON.parse(storedTasks) as ITask[];
        setTasks(arr);
        setLoading(false);
    }
  }, []);


  const onAdd = () => {
    const randomId = uuidv4();
    const newTask = {
        id: randomId,
        text,
        completed: false,
    };
    setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        saveTasks(updatedTasks);
        return updatedTasks;
    });
    setText("");
  }

    const saveTasks = (tasksToSave: ITask[]) => {
        const tasksJson = JSON.stringify(tasksToSave);
        localStorage.setItem("tasks", tasksJson);
    }


  const findTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    return task;
  }

  const onComplete = (id: string) => {
    setTasks(prevTasks => {
        const updatedTasks = prevTasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        saveTasks(updatedTasks);
        return updatedTasks;
    });
  }

  
  return (
    <div className={styles.container}>
        <h1>My tasks</h1>
        <div className={styles.list}>
            {
                tasks && tasks.length ? (
                    tasks.map(task => 
                        <TaskItem id={task.id.toString()} text={task.text} completed={task.completed} onCheck={onComplete} key={task.id}/>
                    )
                ) : (
                    <h3 className={styles.empty}>{"Empty :("}</h3>
                )
            }
        </div>
            <div className="container">
                <div className={styles.input}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    <button onClick={onAdd}>Add</button>
                </div>
            </div>
    </div>
  )
}
