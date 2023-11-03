import Link from "next/link";
import styles from "./Navigation.module.scss";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

export const Navigation = async() => {
  return (
    <nav className={styles.nav}>
        <Link href="/">
            <AiOutlinePlusCircle />
        </Link>
        <Link href="/">
            <AiOutlineBell />
        </Link>
        <Link href={"/account"}>
            <BsPerson />
        </Link>
    </nav>
  )
}