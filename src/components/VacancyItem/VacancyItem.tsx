import { VacancyType } from "@/services/vacancy/vacancy.type"
import { FC } from "react";
import styles from "./VacancyItem.module.scss";
import Link from "next/link";
import { converSalary } from "@/utils/convertSalary";

type VacancyItemProps = VacancyType & {};

export const VacancyItem: FC<VacancyItemProps> = ({id, title, description, company, location, salary, employer}) => {
  return (
    <div className={styles.container}>
        <Link href={`/vacancy/${id}`}>
            <h2>{title}</h2>
            {salary &&
                <p className={styles.salary}>{converSalary(salary)}</p>
            }
            <p className={styles.description}>{description}</p>
            <p className={styles.location}>{`Location: ${location}`}</p>
            <p className={styles.company}>{`Company: ${company}`}</p>
            {
                employer.avatar && 
                    <img className={styles["employer-img"]} src={employer?.avatar}/>
            }
        </Link>
    </div>
  )
}