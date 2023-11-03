"use client"

import { FC, useState } from "react";
import styles from "./AuthForm.module.scss";
import cn from 'clsx';
import { errorCatch } from "@/utils/errorCatch";
import { UserService } from "@/services/user/user.service";
import { useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface AuthFormProps {
    type: "SIGNUP" | "LOGIN";
}

export const AuthForm: FC<AuthFormProps> = ({type}) => {
  const [authType, setAuthType] = useState<"EMPLOYER" | "USER">('USER');
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const user = useUser();
  const router = useRouter();
  console.log(type);

  const onClick = async(e: any) => {
    e.preventDefault();
    try {
        if(!email || !password) {
            throw new Error("Email and password are required");
        }
        const data = {
            email,
            password,
            role: authType
        }
        if(type === "LOGIN") {
            // const response = await UserService.login(data);
            // user.login(response.id);
            // router.push("/account");
            // return;
            signIn("credentials", {
                email,
                password,
                redirect: false
            });
        } else {
            const response = await UserService.register(data);
            user.login(response.id);
            router.push("/account");
            return;
        }
    } catch(err) {
        console.error(errorCatch(err));
        setError(errorCatch(err));
    }
  }

  return (
    <div className={styles.container}>
        <h1>{type === "LOGIN" ? "Welcome Back!" : (authType === "USER" ? "New User" : "New Employer")}</h1>
        <form>
            <div className={cn(styles.input, styles.email)}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    autoComplete="off"
                    value={email ? email : ""}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                    }}
                    className={error ? styles["error-input"] : ""}
                />
            </div>
            <div className={cn(styles.input, styles.password)}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    autoComplete="off"
                    value={password ? password : ""}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(null);
                    }}
                    className={error ? styles["error-input"] : ""}
                />
            </div>
            {error &&
                <p className={styles.error}>{error}</p>
            }
            <div className={styles.options}>
                <button className={styles.auth} onClick={(e) => onClick(e)}>Submit</button>
                <button onClick={() => setAuthType(authType === "EMPLOYER" ? "USER" : "EMPLOYER")} className={styles.switch}>{authType === "EMPLOYER" ? "I am User" : "I am an Employer"}</button>
            </div>
            
        </form>
    </div>
  )
}