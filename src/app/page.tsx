import VacanciesList from '@/components/VacanciesList/VacanciesList'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <VacanciesList />
    </main>
  )
}
