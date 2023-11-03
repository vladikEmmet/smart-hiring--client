export type UserType = {
    id: number;
    email: string;
    name?: string;
    age?: number;
    avatar?: string;
    skills: SkillUserType[];
    about?: string;
    experience: ExperienceType[];
}

export type SkillUserType = SkillUser & {
    id: number;
    skillId: number;
    userId: number;
    rating: number;
}

export type SkillUser = {
    id: number;
    name: string;
}

export type UserAuthType = {
    email: string;
    password: string;
}

export type UserRegisterType = {
    email: string;
    password: string;
    name?: string;
    age?: number;
}

export type ExperienceType = {
    id: number;
    userId: number;
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description?: string;
    location?: string;
    current: boolean;
}