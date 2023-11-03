import { VacancyService } from "@/services/vacancy/vacancy.service"
import styles from "./page.module.scss";
import { VacancyPage } from "@/components/VacancyPage/VacancyPage";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: {
        id: string | string;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const id = params.id
   
    // fetch data
    const product = await VacancyService.getVacancy(id);
   
   
    return {
      title: `${product.title} - Smart Hunter`,
      description: product?.description,
    }
  }

export default async function Page({params}: {params: {id: number}}) {
    const vacancy = await VacancyService.getVacancy(params.id);
    
    return (
        <main className={styles.main}>
            <VacancyPage vacancy={vacancy} />
        </main>
    )
}