declare module "next-auth" {
    interface Session {
        user: {
            email: string;
            // sub: {
            //     id: number;
            // }
            id: number;
            name?: string;
            age: number;
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        }
    }
    type NextAuthOptions = any;
    // type getServerSession = any;
}

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: number;
            name: string;
            email: string;
        },
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        }
    }
}