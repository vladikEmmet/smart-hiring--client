import { Metadata } from "next";
import styles from "./page.module.scss";
import { Quiz } from "@/components/Quiz/Quiz";

export const metadata: Metadata = {
    title: "React Quiz - SmartHunter",
    description: "React knowledge level approve quiz"
}

const questions = [
    {
        question: "Which of the following command is used to create react-js-app ?",
        options: [
            {
                id: 1,
                text: "npx create-react-app appname"
            },
            {
                id: 2,
                text: "npm install create-react-app"
            },
            {
                id: 3,
                text: "npx install create-react-app -g"
            },
            {
                id: 4,
                text: "install - l create-react-app"
            }
        ],
        answer: 1,
    },
    {
        question: "In React.js which one of the following is used to create a class for Inheritance ?",
        options: [
            {
                id: 1,
                text: "Create"
            },
            {
                id: 2,
                text: "Extends"
            },
            {
                id: 3,
                text: "Inherits"
            },
            {
                id: 4,
                text: "Delete"
            },
        ],
        answer: 2,
    },
    {
        question: "What is the default port number in which the application run ?",
        options: [
            {
                id: 1,
                text: "3000"
            },
            {
                id: 2,
                text: "8080"
            },
            {
                id: 3,
                text: "5000"
            },
            {
                id: 4,
                text: "3030"
            }
        ],
        answer: 1,
    },
    {
        question: "Which of the following valid component return type of React ?",
        options: [
            {
                id: 1,
                text: "2"
            },
            {
                id: 2,
                text: "5"
            },
            {
                id: 3,
                text: "1"
            },
            {
                id: 4,
                text: "3"
            }
        ],
        answer: 3,
    },
    {
        question: "Which of the following is a way to handle data in React.js ?",
        options: [
            {
                id: 1,
                text: "State & Props",
            },
            {
                id: 2,
                text: "Services & Components",
            },
            {
                id: 3,
                text: "State & Services",
            },
            {
                id: 4,
                text: "State & Components",
            }
        ],
        answer: 1
    },
    {
        question: "Which of the following is must for the API in React.js ?",
        options: [
            {
                id: 1,
                text: "SetinitialComponent",
            },
            {
                id: 2,
                text: "renderComponent",
            },
            {
                id: 3,
                text: "render",
            },
            {
                id: 4,
                text: "All of the above",
            }
        ],
        answer: 2
    },
    {
        question: "Which of the following is true regarding Babel ?",
        options: [
            {
                id: 1,
                text: "Compiler",
            },
            {
                id: 2,
                text: "Transpilar",
            },
            {
                id: 3,
                text: "Both of the above",
            },
            {
                id: 4,
                text: "None of the above",
            }
        ],
        answer: 3
    },
    {
        question: "In React.js, how we can pass the data from one component to another in React.js ?",
        options: [
            {
                id: 1,
                text: "SetState",
            },
            {
                id: 2,
                text: "Render with aruments",
            },
            {
                id: 3,
                text: "Props",
            },
            {
                id: 4,
                text: "PropTypes",
            }
        ],
        answer: 3
    },
    {
        question: "Which of the following function is true about changing the state in React.js ?",
        options: [
            {
                id: 1,
                text: "this.State{}",
            },
            {
                id: 2,
                text: "this.setState",
            },
            {
                id: 3,
                text: "this.setChangeState",
            },
            {
                id: 4,
                text: "All of the above",
            }
        ],
        answer: 2,
    },
    {
        question: "Which of the following method is true about referring parent class in React.js ?",
        options: [
            {
                id: 1,
                text: "self",
            },
            {
                id: 2,
                text: "inherits()",
            },
            {
                id: 3,
                text: "this()",
            },
            {
                id: 4,
                text: "super()",
            }
        ],
        answer: 4,
    },
]

export default function Page() {
    return (
        <main className={styles.main}>
            <Quiz questions={questions}/>
        </main>
    )
}