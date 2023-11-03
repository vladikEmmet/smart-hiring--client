import styles from "./VacancyPage.module.scss";
import { VacancyType } from "@/services/vacancy/vacancy.type"
import { converSalary } from "@/utils/convertSalary";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react"

type VacancyPageProps = {
    vacancy: VacancyType;
}

export const VacancyPage: FC<VacancyPageProps> = async({vacancy}) => {
  return (
    <div className={styles.container}>
    <h1>{vacancy.title}</h1>
        {vacancy.salary && 
            <p >{converSalary(vacancy.salary)}</p>
        }
        {vacancy.description &&
            <p>{vacancy.description}</p>
        }
        {vacancy.location &&
            <p>{`Location: ${vacancy.location}`}</p>
        }
        {vacancy.company &&
            <Link className={styles.company} href={`/employers/${vacancy.employer.id}`}>
                <p>{`Company: ${vacancy.company}`}</p>
                {vacancy.employer.avatar &&
                    <Image src={vacancy.employer.avatar} alt="Employer avatar" />
                }
            </Link>
        }
    </div>
  )
}