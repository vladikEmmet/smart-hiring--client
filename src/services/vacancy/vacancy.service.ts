import { axiosJson } from "@/utils/axios";
import { errorCatch } from "@/utils/errorCatch";
import { VacancyType } from "./vacancy.type";

export const VacancyService = {
    getAll: async (): Promise<VacancyType[]> => {
        try {
            const response = await axiosJson.get("/vacancies");
            return response.data;
        } catch (error) {
            throw new Error(errorCatch(error));
        }
    },
    getVacancy: async (id: string | number): Promise<VacancyType> => {
        try {
            const response = await axiosJson.get(`/vacancies/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(errorCatch(error));
        }
    },
    createVacancy: async (data: VacancyType): Promise<VacancyType> => {
        try {
            const response = await axiosJson.post("/vacancies", data);
            return response.data;
        } catch (error) {
            throw new Error(errorCatch(error));
        }
    },
    updateVacancy: async (id: string | number, data: VacancyType): Promise<VacancyType> => {
        try {
            const response = await axiosJson.put(`/vacancies/${id}`, data);
            return response.data;
        } catch (error) {
            throw new Error(errorCatch(error));
        }
    },
    deleteVacancy: async (id: string | number): Promise<VacancyType> => {
        try {
            const response = await axiosJson.delete(`/vacancies/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(errorCatch(error));
        }
    },
}