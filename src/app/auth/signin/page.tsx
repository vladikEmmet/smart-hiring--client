import { AuthPage } from "@/components/AuthPage/AuthPage";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Page() {
    
    return (
        <main className={styles.main}>
            <AuthPage authType="LOGIN"/>
            <Link href="/auth/signup">Sign Up</Link>
        </main>
    )
}