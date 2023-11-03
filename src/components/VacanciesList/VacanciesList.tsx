"use client";

import { useEffect, useState } from "react";
import styles from "./VacanciesList.module.scss";
import { VacancyType } from "@/services/vacancy/vacancy.type";
import { VacancyService } from "@/services/vacancy/vacancy.service";
import { errorCatch } from "@/utils/errorCatch";
import { VacancyItem } from "../VacancyItem/VacancyItem";

const VacanciesList = () => {
  const [vacancies, setVacancies] = useState<VacancyType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVacancies = async () => {
      setLoading(true);
      const response = await VacancyService.getAll();
      console.log(response);
      setVacancies(response);
      setLoading(false);
    }

    try {
      fetchVacancies();
    } catch(err) {
      throw new Error(errorCatch(err))
    }
    
  }, [])
  
  return (
    <section className={styles.section}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.list}>
          {vacancies.map((vacancy) => 
            <VacancyItem 
              title={vacancy.title}
              description={vacancy.description}
              company={vacancy.company}
              location={vacancy.location}
              id={vacancy.id}
              key={vacancy.id}
              salary={vacancy.salary}
              employer={vacancy.employer}
            />
          )}
        </div>
      )}
    </section>
  )
}

export default VacanciesList