import { axiosJson } from "@/utils/axios"
import { SkillType } from "./skill.type";

export const SkillService = {
    async getAll(): Promise<SkillType[]> {
        const response = await axiosJson.get("/skill");
        return response.data;
    }
}