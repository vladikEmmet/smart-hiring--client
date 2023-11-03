import { Metadata } from "next";
import styles from "./page.module.scss";
import { Tasks } from "@/components/Widgets/Tasks/Tasks";

export const metadata: Metadata = {
    title: "My tasks - SmartHunter",
    description: "Your own to-do list. You can write all your tasks here"
}

export default function Page() {
    return (
        <main className={styles.main}>
            <Tasks />
        </main>
    )
}