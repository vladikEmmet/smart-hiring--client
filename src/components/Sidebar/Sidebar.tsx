import Link from "next/link";
import styles from "./Sidebar.module.scss";
import { GrSearch } from 'react-icons/gr';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsCalendar } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <aside className={styles.aside}>
        <nav>
            <div className={styles.block}>
                <h2>Dashboard</h2>
                <div className={styles.item}>
                    <BsCalendar />
                    <Link href="/tasks">Tasks</Link>
                </div>
            </div>
            <div className={styles.block}>
                <h2>Recruitment</h2>
                <div className={styles.item}>
                    <MdOutlineSupervisorAccount />
                    <Link href="/">Jobs</Link>
                </div>
                <div className={styles.item}>
                    <GrSearch />
                    <Link href="/">Recruiters</Link>
                </div>
            </div>
            <div className={styles.block}>
                <h2>Others</h2>
                <div className={styles.item}>
                    <FiSettings />
                    <Link href="/settings">Settings</Link>
                </div>
            </div>
        </nav>
    </aside>
  )
}
