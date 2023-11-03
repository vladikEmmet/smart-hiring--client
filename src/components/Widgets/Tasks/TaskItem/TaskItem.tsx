import { FC } from "react";
import styles from "./TaskItem.module.scss";
import cn from 'clsx';

interface TaskItemProps {
    id: string;
    completed: boolean;
    text: string;
    onCheck: (id: string) => void;
}

export const TaskItem: FC<TaskItemProps> = ({id, completed, text, onCheck}) => {
  return (
    <div className={cn(styles.container, {
            [styles.checked]: completed
        })} 
        onClick={() => onCheck(id)}
    >
        <h3>{text}</h3>
        {/* <input type="checkbox" checked={completed} onChange={() => null}/> */}
        <label className={styles.customCheckbox}>
            <input type="checkbox" checked={completed} onChange={() => onCheck(id)} />
            <span className={styles.checkmark}></span>
        </label>
    </div>
  )
}
