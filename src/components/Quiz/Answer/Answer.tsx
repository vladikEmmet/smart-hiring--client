import styles from "./Answer.module.scss";
import { FC } from "react";

export interface AnswerProps {
    question: string;
    options: IOption[];
    answer: number;
    onAnswer: (answer: number) => void;
}

export interface IAnswer {
    question: string;
    options: IOption[];
    answer: number;
}

interface IOption {
    id: number;
    text: string;
}

export const Answer: FC<AnswerProps> = ({question, options, answer, onAnswer, }) => {

  return (
    <div className={styles.container}>
        <h2>{question}</h2>
        <div className={styles.options}>
            {options.map(op =>
                <button key={op.id} onClick={() => onAnswer(op.id)}>{op.text}</button>
            )}
        </div>
    </div>
  )
}