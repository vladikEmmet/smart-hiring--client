import { axiosJson } from "@/utils/axios";
import { UserAuthType, UserRegisterType, UserType } from "./user.type";

export const UserService = {
    async login(data: UserAuthType, token?: string) {
        const response = await axiosJson.post("/user/login", data);
        return response.data;
    },

    async register(data: UserRegisterType) {
        const response = await axiosJson.post("/user/register", data);
        return response.data;
    },

    async getOne(id: string | number): Promise<UserType> {
        const response = await axiosJson({
            url: `/user/${id}`,
            method: "GET",
        });
        return response.data;
    },

    async update(id: string | number, data: UserRegisterType) {
        const response = await axiosJson.patch(`/user/${id}`, data);
        return response.data;
    },

    async addSkill(userId: string | number, skillId: string | number) {
        const response = await axiosJson.post(`/user/${userId}/add-skill/${skillId}`);
        return response.data;
    },

    async changeLevel(userId: string | number, skillId: string | number, level: number) {
        const response = await axiosJson({
            url: `/user/${userId}/update-lvl/${skillId}`,
            method: "PATCH",
            data: {level},
        });
        return response.data;
    },

    async deleteAccount(userId: string | number, token?: string) {
        const response = await axiosJson({
            url: `/user/${userId}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },

    async getEmployers() {
        const response = await axiosJson("/user/employers");
        return response.data;
    }
}