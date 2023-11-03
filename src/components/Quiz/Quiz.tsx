"use client";
import styles from "./Quiz.module.scss";
import { FC, useState } from "react";
import { Answer, IAnswer } from "./Answer/Answer"
import { errorCatch } from "@/utils/errorCatch";
import { UserService } from "@/services/user/user.service";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface QuizProps {
    questions: IAnswer[];
}

export const Quiz: FC<QuizProps> = ({questions}) => {
  const [curQuestion, setCurQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const onAnswer = (answer: number) => {
    if(answer === questions[curQuestion].answer) setCorrectAnswers(prev => prev + 1);
    setCurQuestion(prev => prev + 1);
  }

  const onClick = async() => {
    try {
        setIsModalActive(true);
        const response = await UserService.changeLevel((session?.user as any)?.id , 1, correctAnswers);
        return response;
    } catch(err) {
        console.log(errorCatch(err));
    }
  }
    
  return (
    <div className={styles.container}>
        {curQuestion < questions.length ?
            (<Answer onAnswer={onAnswer} options={questions[curQuestion].options} answer={questions[curQuestion].answer} question={questions[curQuestion].question}/>) : (
                <button onClick={onClick} className={styles.result}>See Result</button>
            )
        }
        {isModalActive &&
            <>
                <div className={styles.curtain} >
                    <div className={styles.modal}>
                        <h2>Your new level is</h2>
                        <h3>{correctAnswers}</h3>
                        <button className={styles["modal-button"]} onClick={() => router.push("/account")}>OK</button>
                    </div>
                </div>
            </>
        }
    </div>
  )
}
