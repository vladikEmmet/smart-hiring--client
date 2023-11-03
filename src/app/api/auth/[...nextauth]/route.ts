import { UserService } from "@/services/user/user.service";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                },
            },
            async authorize(credentials, req) {
                if(!credentials?.username || !credentials?.password) return null;
                const { username, password } = credentials;
                try {
                    const user = await UserService.login({ email: username, password });
                    return user;
                } catch(err) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}: {token: any, user: any}) {
            if(user) return {...token, ...user };
            
            return token;
        },

        async session({session, token}: {session: any, token: any}) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;
            
            return session;
        },
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };