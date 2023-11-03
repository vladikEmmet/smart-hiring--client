import { EmployerType } from "../employer/employer.type";

export type VacancyType = {
    id: number;
    title: string;
    company: string;
    location?: string;
    salary?: number;
    description?: string;

    employer: EmployerType;
}