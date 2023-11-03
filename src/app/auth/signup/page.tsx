import { AuthPage } from "@/components/AuthPage/AuthPage";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Page() {
    return (
        <main className={styles.main}>
            <AuthPage authType="SIGNUP"/>
            <Link href="/auth/signin">Log In</Link>
        </main>
    )
}