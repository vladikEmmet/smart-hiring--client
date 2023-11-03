import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <h1>Smart</h1>
            <h1>Hunter</h1>
        </Link>
        <div className={styles.main}>
            <div className={styles.searchbar}>
                <SearchBar />
            </div>
            <Navigation />
        </div>
    </header>
  )
}