import { Metadata } from "next";
import styles from "./page.module.scss";
import { SettingsPage } from "@/components/SettingsPage/SettingsPage";

export const metadata: Metadata = {
    title: "Settings - SmartHiring",
    description: "Settings",
}

export default function Page() {
    return (
        <main className={styles.main}>
            <SettingsPage />
        </main>
    )
}