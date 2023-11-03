import { AccountPage } from "@/components/AccountPage/AccountPage";
import styles from "./page.module.scss";

export default function Page() {
    return (
        <main className={styles.main}>
            <AccountPage />
        </main>
    )
}