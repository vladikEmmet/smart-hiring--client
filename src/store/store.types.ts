export type UserStore = {
    isUser: boolean;
    id: number | null;
    login: (id: number) => void;
    logout: () => void;
}